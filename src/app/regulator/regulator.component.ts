import { Component, OnInit, Inject, Injectable, InjectionToken, NgModule, APP_INITIALIZER, Input } from '@angular/core';
import { DersComponent } from './ders/ders.component';
import { RecService } from '../service/rec.service';
import { HttpClient } from '@angular/common/http';
import { Observable, interval } from 'rxjs';
import { providers, getDefaultProvider } from 'ethers';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-regulator',
  templateUrl: './regulator.component.html',
  styleUrls: ['./regulator.component.scss']
})
export class RegulatorComponent implements OnInit {

  @Input() RecAmount: any;
  public openders = false;
  public opencontrol = false;
  recs: string;
  

  constructor( private _mintservice: RecService, private _bottomSheet: MatBottomSheet ) { }

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
    console.log("Opening DERs");
    this.openders = true;
  }

  openControl() {
    console.log("Opening REC Control");
    this.opencontrol = true;
  }

  openBottomSheet(): void {
    this._bottomSheet.open(RegBottomSheet);
  }

}


@Component({
  selector: 'bottom-sheet',
  templateUrl: 'sheet.html',
  styleUrls: ['./regulator.component.scss']
})
export class RegBottomSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<RegBottomSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
