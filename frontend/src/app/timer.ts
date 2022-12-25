export class Timer {
  private _minutes: number = 0;
  private _secondes: number = 0;
  private _totalSecondes: number = 0;
  private _timer: string | number | NodeJS.Timeout | undefined;

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
