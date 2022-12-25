import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import ClerkTask from "../models/clerktask.model";

@Injectable({
  providedIn: 'root'
})

export class ClerkTaskService {
  clerkTaskList: ClerkTask[] = [];
  subject = new BehaviorSubject<ClerkTask[]>([]);

  constructor(private http: HttpClient) {
    this.retrieveTasks();
  }

  retrieveTasks(): void {
    this.http.get<ClerkTask[]>("http://localhost:3000/clerk-task").subscribe((clerkTaskList) => {
      this.clerkTaskList = clerkTaskList;
      this.subject.next(this.clerkTaskList);
    });
  }
}
