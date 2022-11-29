import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-tutorial',
  templateUrl: './app-tutorial.component.html',
  styleUrls: ['./app-tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  public recipeChose: string;

  constructor() {
    this.recipeChose = '';
  }

  ngOnInit(): void {
  }

  nextStep(): void { //todo
    console.log("recipe-step");
  }


}
