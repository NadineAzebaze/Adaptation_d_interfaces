import {Component} from '@angular/core';
import {Timer} from "../../../../timer";
import {State} from "../../../../state";

@Component({
  selector: 'app-chronometre',
  templateUrl: './chronometre.component.html',
  styleUrls: ['./chronometre.component.less']
})

export class ChronometreComponent {
  btnPlay: string = 'Démarrer';
  timer: Timer = new Timer();
  state: State = new State();

  play() {
    this.timer.start();
    this.state.setPlay();
    this.btnPlay = 'Continuer';
  }
  stop() {
    this.timer.stop();
    this.state.setStop();
  }
  backward() {
    this.timer.reset();
    this.state.setBackward();
    this.btnPlay = 'Démarrer';
  }
}


