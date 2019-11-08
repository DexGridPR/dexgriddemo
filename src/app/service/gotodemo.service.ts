import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GotodemoService {
  public should_open_reg = false;
  public should_open_cus = false;

  constructor() { }

  reg() {
    console.log("Open Reg from Service");
    this.should_open_reg = true;
    this.should_open_cus = false;
  }

  cus() {
    console.log("Open Cus from Service");
    this.should_open_reg = false;
    this.should_open_cus = true;
  }

}
