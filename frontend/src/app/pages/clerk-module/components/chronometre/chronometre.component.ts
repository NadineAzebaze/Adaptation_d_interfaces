import {Component, Injectable} from '@angular/core';
import {Timer} from "../../../../timer";
import {State} from "../../../../state";

@Component({
  selector: 'app-chronometre',
  templateUrl: './chronometre.component.html',
  styleUrls: ['./chronometre.component.less']
})

export class ChronometreComponent {
  private btnPlay: string = 'Démarrer';
  private timer: Timer = new Timer();
  private state: State = new State();

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


