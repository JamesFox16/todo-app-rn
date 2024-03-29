import { ITask } from '../hooks/useDatabase';
import SQLiteDatabase from './SQLiteDatabase';

const INSERT_TASK = 'INSERT INTO tasks (text, completed) VALUES (?, ?)';
const SELECT_TASKS = 'SELECT * FROM tasks';
const UPDATE_TASK = 'UPDATE tasks SET completed = ? WHERE id = ?';
const DELETE_TASK = 'DELETE FROM tasks WHERE id = ?';

export default class Database {
  // Add a task to the tasks table
  static addTask(text: string) {
    const db = SQLiteDatabase.getInstance();
    return new Promise((resolve, reject) => {
      return db.transaction((tx) =>
        tx.executeSql(INSERT_TASK, [text, 0], (_, result) => {
          return resolve({ id: result.insertId, text, completed: 0 });
        }, (_, error) => {
            reject(error);
            return false;
          }
        )
      );
    });
  }

  // Get all tasks from the tasks table
  static getTasks(): Promise<ITask[]> {
    const db = SQLiteDatabase.getInstance();
    return new Promise<ITask[]>((resolve, reject) => {
      return db.transaction((tx) =>
        tx.executeSql(SELECT_TASKS, [], (_, { rows }) => {
          const tasks: ITask[] = [];
          for (let i = 0; i < rows.length; i++) {
            tasks.push(rows.item(i));
          }
          return resolve(tasks);
        }, (_, error) => {
            reject(error);
            return false;
          }
        )
      );
    });
  }

  // Update the completed status of a task. 0 = not completed, 1 = completed
  static updateTask(id: number, completed: number): Promise<void> {
    const db = SQLiteDatabase.getInstance();
    return new Promise<void>((resolve, reject) => {
      return db.transaction((tx) =>
        tx.executeSql(UPDATE_TASK, [completed ? 1 : 0, id], (_, result) => {
          return resolve();
        }, (_, error) => {
            reject(error);
            return false;
          }
        )
      );
    });
  }

  // Delete a task from the tasks table
  static deleteTask(id: number): Promise<void> {
    const db = SQLiteDatabase.getInstance();
    return new Promise<void>((resolve, reject) => {
      return db.transaction((tx) =>
        tx.executeSql(DELETE_TASK, [id], (_, result) => {
          return resolve();
        }, (_, error) => {
            reject(error);
            return false;
          }
        )
      );
    });
  }
}