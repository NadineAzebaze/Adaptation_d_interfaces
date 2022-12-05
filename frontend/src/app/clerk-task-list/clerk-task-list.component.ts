import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-clerk-task-list',
  templateUrl: './clerk-task-list.component.html',
  styleUrls: ['./clerk-task-list.component.less']
})
export class ClerkTaskListComponent implements OnInit {

  constructor(public router : Router) {
  }

  ngOnInit(): void {
  }


}
