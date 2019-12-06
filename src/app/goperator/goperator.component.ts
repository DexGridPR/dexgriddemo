import { Component, OnInit, HostListener, InjectionToken, Injectable, Inject, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatDialogModule, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AccountComponent } from 'src/app/goperator/account/account.component';
import { AccountverifyService } from 'src/app/service/accountverify.service';
import { interval } from 'rxjs';


@Component({
  selector: 'app-goperator',
  templateUrl: './goperator.component.html',
  styleUrls: ['./goperator.component.scss']
})
export class GoperatorComponent implements OnInit {

  @Inject(MAT_DIALOG_DATA) private data: any;
  // public operator: string = "Default";
  @Input() operator: string;

  public regulatoraccounts = false;

  constructor(private _bottomSheet: MatBottomSheet, public dialog: MatDialog, private _operator: AccountverifyService ) { }

  ngOnInit() {
    console.log("Open Account Profile");
    const dialog = this.dialog.open( AccountComponent, {
      width: '90%', maxWidth: '90%'
    });
    dialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

    this._operator.currentOperator.subscribe(operator => this.operator = operator);

    //Run every few seconds to check on new balance
    // interval(100 * 60).subscribe(recs => {
    //   this._operator.getTotalBalance();
    // })
  }

  regacc() {
    this.regulatoraccounts = true;
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheet);
  }
}

@Component({
  selector: 'bottom-sheet',
  templateUrl: 'sheet.html',
  styleUrls: ['./goperator.component.scss']
})
export class BottomSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
