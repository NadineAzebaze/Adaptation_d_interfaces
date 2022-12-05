import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  public isApprenti = false;
  constructor(public router : Router) {
  }

  ngOnInit(): void {
  }


  changeMode() {
    this.isApprenti = !this.isApprenti;
  }
}
