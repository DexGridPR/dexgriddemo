import { Component, OnInit } from '@angular/core';
import { CustomerComponent } from '../customer/customer.component';
import { RegulatorComponent } from '../regulator/regulator.component';
// import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog } from "@angular/material";
// import { MatDialogConfig, MatDialog } from "@angular/material";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {
  public should_open_reg = true;
  public should_open_cus = false;

  // constructor( private dialog: MatDialog ) { }

  ngOnInit() {
  }

  reg() {
    this.should_open_reg = true;
    this.should_open_cus = false;
    console.log("Regulator Component")
    // const dialogConfig = new MatDialogConfig();
    // this.dialog.open(RegulatorComponent, dialogConfig);
  }

  cus() {
    this.should_open_cus = true;
    this.should_open_reg = false;
    console.log("Customer Component")
  }

}
