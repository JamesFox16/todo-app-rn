import { createContext, useCallback, useContext, useEffect, useReducer } from 'react';
import Database from '../data/Database';

export interface ITask {
  id: number;
  text: string;
  completed: number;
}
export interface DatabaseState {
  initialized: boolean;
  taskList: ITask[];
}

export enum DatabaseActionType {
  SET_INIT,
  SET_TASK_LIST,
  APPEND_TASK_LIST,
  UPDATE_IN_TASK_LIST,
  DELETE_FROM_TASK_LIST,
}
type DatabaseAction = (
  | { type: DatabaseActionType.SET_INIT; payload: boolean }
  | { type: DatabaseActionType.SET_TASK_LIST; payload: ITask[] }
  | { type: DatabaseActionType.APPEND_TASK_LIST; payload: ITask }
  | { type: DatabaseActionType.UPDATE_IN_TASK_LIST; payload: ITask }
  | { type: DatabaseActionType.DELETE_FROM_TASK_LIST; payload: number }
);
type Dispatch = (action: DatabaseAction) => void;
type State = DatabaseState;
type DatabaseProviderProps = { children: React.ReactNode };

const DatabaseStateContext = createContext<
  {
    state: State,
    addTask: (text: string) => void,
    updateTaskCompleted: (update: ITask) => void,
    removeTask: (id: number) => void,
  } | undefined
>(undefined);

const databaseReducer = (state: State, action: DatabaseAction): State => {
  switch (action.type) {
    case DatabaseActionType.SET_INIT:
      return {
        ...state,
        initialized: action.payload,
      };
    case DatabaseActionType.SET_TASK_LIST:
      return {
        ...state,
        taskList: action.payload,
      };
    case DatabaseActionType.APPEND_TASK_LIST:
      return {
        ...state,
        taskList: [...state.taskList, action.payload],
      };
    case DatabaseActionType.UPDATE_IN_TASK_LIST:
      return {
        ...state,
        taskList: state.taskList.map((task: ITask) => {
          if (task.id === action.payload.id) {
            return action.payload;
          }
          return task;
        }),
      };
    case DatabaseActionType.DELETE_FROM_TASK_LIST:
      return {
        ...state,
        taskList: state.taskList.filter((task: ITask) => task.id !== action.payload),
      };
    default:
      return state;
  }
}

const DatabaseProvider = ({ children }: DatabaseProviderProps) => {
  const [state, dispatch] = useReducer(databaseReducer, {
    initialized: false,
    taskList: [],
  });

  const initializeTodoList = useCallback(async () => {
    try {
      const response = await Database.getTasks();
      dispatch({ type: DatabaseActionType.SET_TASK_LIST, payload: response });
      dispatch({ type: DatabaseActionType.SET_INIT, payload: true });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (!state.initialized) {
      initializeTodoList();
    }
  }, [state.initialized, initializeTodoList]);

  const updateTaskCompleted = useCallback(async (update: ITask) => {
    try {
      await Database.updateTask(update.id, update.completed);
      dispatch({ type: DatabaseActionType.UPDATE_IN_TASK_LIST, payload: update });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const addTask = useCallback(async (text: string) => {
    try {
      const response = await Database.addTask(text);
      console.log(response);
      if (response) {
        dispatch({ type: DatabaseActionType.APPEND_TASK_LIST, payload: response as ITask });
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const removeTask = useCallback(async (id: number) => {
    try {
      await Database.deleteTask(id);
      dispatch({ type: DatabaseActionType.DELETE_FROM_TASK_LIST, payload: id });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const value = { state, updateTaskCompleted, addTask, removeTask };
  return (
    <DatabaseStateContext.Provider value={value}>
      {children}
    </DatabaseStateContext.Provider>
  );
}

const useDatabase = () => {
  const context = useContext(DatabaseStateContext);
  if (context === undefined) {
    throw new Error('useDatabase must be used within a DatabaseProvider');
  }
  return context;
}

export { DatabaseProvider, useDatabase };

