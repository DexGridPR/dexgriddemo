import { Component, OnInit } from '@angular/core';
import { SellrecComponent } from '../sellrec/sellrec.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  public should_open_sellrec = true;
  public should_open_history = false;

  constructor() { }

  ngOnInit() {
  }

  history() {
    console.log("Open Bill History");
  }

  sellrec() {
    this.should_open_sellrec = true;
    this.should_open_history = false;
    console.log("Open up exchange");
  }

}
