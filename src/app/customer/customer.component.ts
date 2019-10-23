import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  history() {
    console.log("Open Bill History");
  }

  sellrec() {
    console.log("Open up exchange");
  }

}
