import { ClerkTask } from '../clerk/clerk-task/clerk-task.interface';

export const TASK_LIST: ClerkTask[] = [
  {
    id: 'task1',
    commandDate: new Date(2022, 10, 10),
    quantity: 1,
    recipeId: 'coq_au_vin',
    instruction: 'blablablabla',
  },
  {
    id: 'task2',
    commandDate: new Date(2022, 10, 10),
    quantity: 1,
    recipeId: 'salade_nicoise',
    instruction: 'blablablabla',
  },
];
