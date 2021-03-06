import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GotodemoService {
  public should_open_reg = false;
  public should_open_cus = false;
  public should_open_gop = false;
  public nothing = true;

  constructor() { }

  revertDemo() {
    console.log("Open Reg from Service");
    this.should_open_gop = false;
    this.should_open_cus = false;    
    this.should_open_reg = false;
    this.nothing = true;
  }

  reg() {
    console.log("Open Reg from Service");
    this.should_open_gop = false;
    this.should_open_cus = false;    
    this.should_open_reg = true;
    this.nothing = false;
  }

  cus() {
    console.log("Open Cus from Service");
    this.should_open_reg = false;
    this.should_open_gop = false;    
    this.should_open_cus = true;
    this.nothing = false;
  }

  gop() {
    console.log("Open Gop from Service");
    this.should_open_reg = false;
    this.should_open_cus = false;
    this.should_open_gop = true;  
    this.nothing = false;  
  }
}
