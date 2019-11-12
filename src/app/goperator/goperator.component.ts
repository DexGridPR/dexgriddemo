import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goperator',
  templateUrl: './goperator.component.html',
  styleUrls: ['./goperator.component.scss']
})
export class GoperatorComponent implements OnInit {

  public regulatoraccounts = true;

  constructor() { }

  ngOnInit() {
  }

  regacc() {
    this.regulatoraccounts = true;
  }


}
