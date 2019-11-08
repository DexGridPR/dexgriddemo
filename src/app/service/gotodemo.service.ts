import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GotodemoService {
  public should_open_reg = false;
  public should_open_cus = false;
  public should_open_gop = false;

  constructor() { }

  reg() {
    console.log("Open Reg from Service");
    this.should_open_gop = false;
    this.should_open_cus = false;    
    this.should_open_reg = true;
  }

  cus() {
    console.log("Open Cus from Service");
    this.should_open_reg = false;
    this.should_open_gop = false;    
    this.should_open_cus = true;
  }

  gop() {
    console.log("Open Gop from Service");
    this.should_open_reg = false;
    this.should_open_cus = false;
    this.should_open_gop = true;    
  }
}
