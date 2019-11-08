import { Component, OnInit, ViewChild } from '@angular/core';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import '@angular/material/prebuilt-themes/deeppurple-amber.css';

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

  constructor() { }

  ngOnInit() {
  }

}
