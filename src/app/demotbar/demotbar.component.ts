import { Component, OnInit, ViewChild } from '@angular/core';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import '@angular/material/prebuilt-themes/deeppurple-amber.css';
import { GotodemoService } from "../service/gotodemo.service";

@Component({
  selector: 'app-demotbar',
  templateUrl: './demotbar.component.html',
  styleUrls: ['./demotbar.component.scss']
})
export class DemotbarComponent implements OnInit {

  // @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  // someMethod() {
  //   this.trigger.openMenu();
  // }

  constructor( private _gotodemo: GotodemoService) { }

  ngOnInit() {
  }

  reg() {
    console.log("Open Regulator Portal");
    this._gotodemo.reg();
  }

  cus() {
    console.log("Open Customer Portal");
    this._gotodemo.cus();
  }

}
