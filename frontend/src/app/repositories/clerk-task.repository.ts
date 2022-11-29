import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import ClerkTask from '../models/clerktask.model';
import { UserSessionService } from './user-session.service';

@Injectable({
  providedIn: 'root'
})
export class ClerkTaskRepository {

  private tasks: ClerkTask[] = [];
  public subject: BehaviorSubject<null> = new BehaviorSubject<null>(null);

  constructor(private http: HttpClient, private userSession: UserSessionService) { }

  public async fetchTasks() {
  }

  public async fectchTask(id: String) {}

  public async getTask(id: String) {
    return this.tasks.find(t => t.id === id);
  }
}
