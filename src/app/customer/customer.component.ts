import { Component, OnInit, HostListener, InjectionToken, Injectable, Inject, Input } from '@angular/core';
import { SellrecComponent } from './sellrec/sellrec.component';
import { HistoryComponent } from './history/history.component';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatDialogModule, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
// import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ConsumptionComponent } from 'src/app/customer/consumption/consumption.component';
import { TermsComponent } from 'src/app/customer/terms/terms.component';
import { CreditsComponent } from 'src/app/customer/credits/credits.component';
import { SettingsComponent } from 'src/app/customer/settings/settings.component';
import { ThemarketComponent } from 'src/app/customer/themarket/themarket.component';
import { FirestoredexService } from 'src/app/service/firestoredex.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { AngularFirestore } from 'angularfire2/firestore';
import { HttpClientModule } from '@angular/common/http';
// import * as firebase from 'firebase';
import { NewUserComponent } from 'src/app/customer/new-user/new-user.component';
import { AuthService } from '../service/auth.service';


export class Accounts {
  id?: string;
  credits?: number;
  genID?: string;
  conID?: string;
  address?: string;
  solar?: string
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})

export class CustomerComponent implements OnInit {
  public should_open_sellrec = false;
  public should_open_history = false;
  public should_open_settings = false;
  public should_open_market = false;

  @Inject(MAT_DIALOG_DATA) private data: any;

  @Input() account: Accounts[];

  constructor( 
    private _bottomSheet: MatBottomSheet, 
    public dialog: MatDialog, 
    private _accounts: FirestoredexService, 
    public auth: AuthService 
  ) { }

  ngOnInit() {
    this._accounts.getAccounts().subscribe(Account => {
      this.account = Account;
      // console.log(this.account)
      const AccountOne = Account[0]
      const credits = AccountOne.credits
      // console.log(credits)
      const fill = 60 / 29
      // if (Account.id = "44"){
      //   this.account = Account.id;
      //   console.log(this.account)
      // }
    })
  }

  openDialog(): void {
    const dialog = this.dialog.open( ConsumptionComponent, {
      width: '90%', maxWidth: '90%'
    });
    dialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  history() {
    console.log("Open Bill History");
    this.should_open_market = false;
    this.should_open_settings = false;
    this.should_open_history = true;
    this.should_open_sellrec = false;
  }

  sellrec() {
    this.should_open_market = false;
    this.should_open_sellrec = true;
    this.should_open_history = false;
    console.log("Open up exchange");
  }

  openSettings() {
    this.should_open_market = false;
    this.should_open_settings = true;
    this.should_open_history = false;
    this.should_open_sellrec = false;
    console.log("Open up Settings");
  }


  opentheMarket() {
    this.should_open_settings = false;
    this.should_open_history = false;
    this.should_open_sellrec = false;
    this.should_open_market = true;
    console.log("Open up Settings");
  }

  //Open Bottom Panel for Account 
  onCreate(): void {
    console.log("Open Terms Popup");
    const dialog = this.dialog.open( TermsComponent, {
      width: '90%', maxWidth: '90%', 
    });
    dialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  //Open Credits Component
  openCredits(): void {
    console.log("Open Credits Portal");
    const dialog = this.dialog.open( CreditsComponent, {
      // width: '90%', 
      maxWidth: '90%'
    });
    dialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

//OPens Bottom bar when clicking information icon
  openBottomSheet(): void {
    this._bottomSheet.open(CusBottomSheet);
  }

//Opens Bottom bar when clicking warning sign
  openBottomWarning(): void {
    this._bottomSheet.open(CusBottomWarn);
  }

  //Array for Charts
  lineChartData: ChartDataSets[] = [
    { data: [99, 95.2, 91.0, 76.3, 70.1, 64], label: 'Prepayment Credits' },
  ];
  //Chart Labels
  lineChartLabels: Label[] = ['1st', '3rd', '5th', '7th', '9th', '11th'];

  //Settings of Chart
  lineChartOptions = {
    responsive: true,
    scales: { //you're missing this
    yAxes: [{
       scaleLabel: {
          display: true,
          labelString: 'Credits Left [Dollar Denominated]'
       }
    }],
    xAxes: [{
      scaleLabel: {
         display: true,
         labelString: 'Day of the Month [March]'
      }
   }]
 }//END scales
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#FBD22D',
      backgroundColor: '#6D92CB',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

}

//Info Component for Bottom Bar
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

//Warning Component for Bottom Bar
@Component({
  selector: 'bottom-sheet-warn',
  templateUrl: 'warning.html',
  styleUrls: ['./customer.component.scss']
})
export class CusBottomWarn {
  constructor(private _bottomSheetRef: MatBottomSheetRef<CusBottomWarn>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
  
}