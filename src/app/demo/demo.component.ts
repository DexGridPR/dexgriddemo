import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { CustomerComponent } from '../customer/customer.component';
import { RegulatorComponent } from '../regulator/regulator.component';
import { GoperatorComponent} from '../goperator/goperator.component';
// import { MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog } from "@angular/material";
// import { MatDialogConfig, MatDialog } from "@angular/material";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GotodemoService } from '../service/gotodemo.service';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatDialogModule, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NewUserComponent } from 'src/app/customer/new-user/new-user.component';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  // public should_open_reg = false;
  // public should_open_cus = false;
  @Inject(MAT_DIALOG_DATA) private data: any;

  // constructor( private dialog: MatDialog ) { }
  constructor ( private _gotodemo: GotodemoService, public dialog: MatDialog ) { }

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

  get nothing(): boolean {
    return this._gotodemo.nothing;
  }

  // get cus(): boolean {
  //   return this._gotodemo.should_open_cus;
  // }

  set searchText(value: boolean) {
    this._gotodemo.should_open_reg = value;
    console.log(value);
  }

  reg() {
    console.log("Open Regulator Portal");
    this._gotodemo.reg();
  }

  cus() {
    console.log("Open Customer Portal");
    this._gotodemo.cus();
  }

  gop() {
    console.log("Open Grid Operator Portal");
    this._gotodemo.gop();
  }

  openNewUser(): void {
    console.log("Open Onboarding");
    const dialog = this.dialog.open( NewUserComponent, {
      // width: '90%', 
      maxWidth: '90%'
    });
    dialog.afterClosed().subscribe(result => {
      this._gotodemo.cus();
      console.log("Result: " , result);
      console.log('The dialog was closed');
    });
  }

}
