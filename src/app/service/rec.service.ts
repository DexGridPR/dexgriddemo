import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecService {

  constructor() { }

  Rec: number = 13;

  Value: number = 15;

  setData(Value) {
    console.log("setData");
    Value = this.Value;
  }

  getData() {
    console.log("getData");
  }
}
