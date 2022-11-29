import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {
  private _userId: String|undefined;
  private _isClerk = false;

  constructor() { }

  getUserId(): String {
    if(!this._userId)
      throw "User not logged.";
    return this._userId;
  }

  get isClerk() {
    return this._isClerk;
  }

  setUser(id: String, isClerk = false) {
    this._userId = id;
    this._isClerk = isClerk;
  }
}
