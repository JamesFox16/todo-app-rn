import { useCallback, useMemo, useState } from 'react';
import { ITask } from './useDatabase';

export const useTasks = () => {
  const [taskId, setTaskId] = useState<number>(7);
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: 1,
      text: 'Buy milk',
      completed: 0,
    },
    {
      id: 2,
      text: 'Buy eggs',
      completed: 1,
    },
    {
      id: 3,
      text: 'Buy bread',
      completed: 1,
    },
    {
      id: 4,
      text: 'Buy butter',
      completed: 0,
    },
    {
      id: 5,
      text: 'Buy steak',
      completed: 0,
    },
    {
      id: 6,
      text: 'Buy orange juice',
      completed: 0,
    },
  ]);

  return { tasks, setTasks, taskId, setTaskId };
}