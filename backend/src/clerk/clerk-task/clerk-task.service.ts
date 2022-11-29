import { Injectable } from '@nestjs/common';
import { ClerkTask } from './clerk-task.interface';
import Recipes from '../../mocks/recipes.mock.json';
import { BehaviorSubject } from 'rxjs';
import { getuid } from 'process';

@Injectable()
export class ClerkTaskService {
    private tasks: ClerkTask[] = [];
    public subject: BehaviorSubject<null> = new BehaviorSubject<null>(null);

    constructor() {
        setInterval(this.generateTask, 1000);
    }

    private generateUUID() {
        return (new Date()).getTime().toString(36) + Math.random().toString(36).slice(2)
    }

    private generateTask() {
        var task = {
            id: this.generateUUID(),
            commandDate: new Date(Date.now()),
            quantity: Math.floor(Math.random() * 10),
            recipeId: Recipes[Math.floor(Math.random() * Recipes.length)].id
        } as ClerkTask;
        this.tasks.push(task);
        this.subject.next(null);
    }

    public get(id: String) {
        return this.tasks.find(t => t.id === id);
    }

    public getAll() {
        return this.tasks;
    }
}
