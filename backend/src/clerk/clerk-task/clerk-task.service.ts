import { Injectable } from '@nestjs/common';
import { ClerkTask } from './clerk-task.interface';
import Recipes from '../../mocks/recipes.mock.json';
import { BehaviorSubject } from 'rxjs';
import { SocketGateway } from 'src/core/socket-gateway/socket.gateway';
import { ClerkSocketMessages } from '../clerk_socket_messages';

@Injectable()
export class ClerkTaskService {
  private tasks: ClerkTask[] = [];
  public subject: BehaviorSubject<null> = new BehaviorSubject<null>(null);

  constructor(private socketGateway: SocketGateway) {
    setInterval(() => this.generateTask(), 1000);
  }

  private generateUUID() {
    return (
      new Date().getTime().toString(36) + Math.random().toString(36).slice(2)
    );
  }

  private generateTask() {
    const uuid = this.generateUUID();
    const task = {
      id: uuid,
      commandDate: new Date(Date.now()),
      quantity: Math.floor(Math.random() * 10),
      recipeId: Recipes[Math.floor(Math.random() * Recipes.length)].id,
    } as ClerkTask;
    this.add(task);
  }

  public add(task: ClerkTask) {
    this.tasks.push(task);
    this.subject.next(null);
    this.socketGateway.emit(ClerkSocketMessages.NEW_CLERK_TASK, task);
  }

  public get(id: string) {
    return this.tasks.find((t) => t.id === id);
  }

  public getAll() {
    return this.tasks;
  }
}
