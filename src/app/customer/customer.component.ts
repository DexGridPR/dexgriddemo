import { Component, OnInit, HostListener, InjectionToken, Injectable, Inject } from '@angular/core';
import { SellrecComponent } from '../sellrec/sellrec.component';
import { HistoryComponent } from '../history/history.component';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { MatDialog, MatDialogConfig } from '@angular/material';
import { TermsComponent } from 'src/app/terms/terms.component';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})

export class CustomerComponent implements OnInit {
  public should_open_sellrec = false;
  public should_open_history = false;

  @Inject(MAT_DIALOG_DATA) private data: any;


  constructor( private _bottomSheet: MatBottomSheet ) { }

  ngOnInit() {
  }

  history() {
    console.log("Open Bill History");
    this.should_open_history = true;
    this.should_open_sellrec = false;
  }

  sellrec() {
    this.should_open_sellrec = true;
    this.should_open_history = false;
    console.log("Open up exchange");
  }

  onCreate() {
    console.log("Open Account Profile");
  }

  openBottomSheet(): void {
    this._bottomSheet.open(CusBottomSheet);
  }

}

@Component({
  selector: 'bottom-sheet',
  templateUrl: 'sheet.html',
  styleUrls: ['./customer.component.scss']
})
export class CusBottomSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<CusBottomSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
