import { Component, OnInit } from '@angular/core';
import { DersComponent } from '../ders/ders.component';

@Component({
  selector: 'app-regulator',
  templateUrl: './regulator.component.html',
  styleUrls: ['./regulator.component.scss']
})
export class RegulatorComponent implements OnInit {

  public openders = false;

  constructor() { }

  ngOnInit() {
  }

  ders() {
    console.log("Open DERs");
    this.openders = true;
  }

}
