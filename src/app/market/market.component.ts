import { Component, OnInit } from '@angular/core';
import { CustomerComponent } from '../customer/customer.component';
import { RegulatorComponent } from '../regulator/regulator.component';
import { GoperatorComponent} from '../goperator/goperator.component';
// import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog } from "@angular/material";
// import { MatDialogConfig, MatDialog } from "@angular/material";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GotodemoService } from '../service/gotodemo.service';


@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {
  // public should_open_reg = false;
  // public should_open_cus = false;

  // constructor( private dialog: MatDialog ) { }
  constructor ( private _gotodemo: GotodemoService ) { }

  ngOnInit() {
  //   this._gotodemo.should_open_reg.subscribe((should_open_reg) => {
  //     this.should_open_reg = isRunning;
  //  });
  }

  get should_open_reg(): boolean {
    return this._gotodemo.should_open_reg;
  }

  get should_open_cus(): boolean {
    return this._gotodemo.should_open_cus;
  }

  get should_open_gop(): boolean {
    return this._gotodemo.should_open_gop;
  }

  // get cus(): boolean {
  //   return this._gotodemo.should_open_cus;
  // }

  set searchText(value: boolean) {
    this._gotodemo.should_open_reg = value;
    console.log(value);
  }
  


}
