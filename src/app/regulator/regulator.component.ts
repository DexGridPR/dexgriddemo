import { Component, OnInit, Inject, Injectable, InjectionToken, NgModule, APP_INITIALIZER, Input } from '@angular/core';
import { DersComponent } from '../ders/ders.component';
import { RecService } from '../service/rec.service';
import { HttpClient } from '@angular/common/http';
import { Observable, interval } from 'rxjs';
import { providers, getDefaultProvider } from 'ethers';

@Component({
  selector: 'app-regulator',
  templateUrl: './regulator.component.html',
  styleUrls: ['./regulator.component.scss']
})
export class RegulatorComponent implements OnInit {

  @Input() RecAmount: any;
  public openders = false;
  recs: string;

  constructor( private _mintservice: RecService ) { }

  ngOnInit() {
    this._mintservice.currentRecs.subscribe(recs => this.recs = recs);

    this._mintservice.getTotalBalance();

    //Run every few seconds to check on new balance
    interval(100 * 60).subscribe(recs => {
      this._mintservice.getTotalBalance();
    })
  }


  mint(value) {
    console.log("Minting");
    this._mintservice.mintRec(value);
  }

  ders() {
    console.log("Open DERs");
    this.openders = true;
  }

}
