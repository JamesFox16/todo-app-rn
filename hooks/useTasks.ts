import { useState } from 'react';

export interface ITask {
  id: number;
  text: string;
  completed: boolean;
}
export function useTasks() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: 1,
      text: 'Buy milk',
      completed: false,
    },
    {
      id: 2,
      text: 'Buy eggs',
      completed: true,
    },
    {
      id: 3,
      text: 'Buy bread',
      completed: true,
    },
    {
      id: 4,
      text: 'Buy butter',
      completed: false,
    },
    {
      id: 5,
      text: 'Buy steak',
      completed: false,
    },
    {
      id: 6,
      text: 'Buy orange juice',
      completed: false,
    },
  ]);

  return { tasks, setTasks } as const;
}