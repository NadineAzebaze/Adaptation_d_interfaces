import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-chronometre',
  templateUrl: './chronometre.component.html',
  styleUrls: ['./chronometre.component.less']
})

export class ChronometreComponent {
  private _btnPlay: string = 'Démarrer';
  private _timer: Timer = new Timer();
  private _state: State = new State();

  play() {
    this._timer.start();
    this._state.setPlay();
    this._btnPlay = 'Continuer';
  }
  stop() {
    this._timer.stop();
    this._state.setStop();
  }
  backward() {
    this._timer.reset();
    this._state.setBackward();
    this._btnPlay = 'Démarrer';
  }
}

  class State {
  private _play: boolean = true;
  private _stop: boolean = false;
  private _backward: boolean = false;
  get stop(): boolean { return this._stop; }
  get backward(): boolean { return this._backward; }
  get play(): boolean { return this._play; }
  setPlay() {
    this._stop = true;
    this._play = this._backward = false;
  }
  setStop() {
    this._stop = false;
    this._play = this._backward = true;
  }
  setBackward() {
    this._play = true;
    this._stop = this._backward = false;
  }
}

class Timer {
  private _minutes: number = 0;
  private _secondes: number = 0;
  private _totalSecondes: number = 0;
  private _timer:any;
  get minutes(): number { return this._minutes; }
  get secondes(): number { return this._secondes; }
  start() {
    this._timer = setInterval(() => {
      this._minutes = Math.floor(++this._totalSecondes / 60);
      this._secondes = this._totalSecondes - this._minutes * 60;
    }, 1000);
  }
  stop() {
    clearInterval(this._timer);
  }
  reset() {
    this._totalSecondes = this._minutes = this._secondes = 0;
  }
}
