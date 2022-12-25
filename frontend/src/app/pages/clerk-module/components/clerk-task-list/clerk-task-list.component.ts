import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import ClerkTask from "../../../../models/clerktask.model";
import {ClerkTaskService} from "../../../../services/clerk-task.service";

@Component({
  selector: 'app-clerk-task-list',
  templateUrl: './clerk-task-list.component.html',
  styleUrls: ['clerk-task-list.component.less']
})
export class ClerkTaskListComponent implements OnInit {


  @Input()
  clerkTaskList: ClerkTask[] = [];

  @Output()
  clerkTaskSelected: EventEmitter<ClerkTask> = new EventEmitter<ClerkTask>();

  constructor(public clerkTaskService : ClerkTaskService) {
  }

  ngOnInit(): void {
    this.clerkTaskService.subject.subscribe(v => this.clerkTaskList = v);
  }



}


