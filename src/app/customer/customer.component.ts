import { Component, OnInit, HostListener, InjectionToken, Injectable, Inject } from '@angular/core';
import { SellrecComponent } from '../sellrec/sellrec.component';
import { HistoryComponent } from '../history/history.component';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { MatDialog, MatDialogConfig } from '@angular/material';
import { TermsComponent } from 'src/app/terms/terms.component';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})

export class CustomerComponent implements OnInit {
  public should_open_sellrec = false;
  public should_open_history = false;

  @Inject(MAT_DIALOG_DATA) private data: any;


  constructor( ) { }

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

  // onCreate() {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.hasBackdrop = false;
  //   dialogConfig.disableClose = false;
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.width = "30em;";
  //   dialogConfig.position = {
  //     'top': '1em'
  //   };
  //   this.dialog.open(TermsComponent, dialogConfig);
    
  // }

}
