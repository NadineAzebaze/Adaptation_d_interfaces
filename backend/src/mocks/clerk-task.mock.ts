import {ClerkTask} from "../clerk/clerk-task/clerk-task.interface";

export const TASK_LIST: ClerkTask[] = [
    {
        id: "task1",
        commandDate: new Date(2022,10,10),
        quantity: 1,
        recipeId: 'coq_au_vin',
    },
    {
        id: "task1",
        commandDate: new Date(2022,10,10),
        quantity: 1,
        recipeId: 'coq_au_vin',
    },

];

export const RECIPE: Recipe[] = [
    {
        id: "coq_au_vin",
        name: "Coq au vin",
        clerkSteps: []
    },
    {
        id: "salade_nicoise",
        name: "Salade niçoise",
        clerkSteps: []
    }
];
