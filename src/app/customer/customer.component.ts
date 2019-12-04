import { Component, OnInit, HostListener, InjectionToken, Injectable, Inject } from '@angular/core';
import { SellrecComponent } from '../sellrec/sellrec.component';
import { HistoryComponent } from './history/history.component';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatDialogModule, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TermsComponent } from 'src/app/terms/terms.component';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ConsumptionComponent } from 'src/app/customer/consumption/consumption.component';



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})

export class CustomerComponent implements OnInit {
  public should_open_sellrec = false;
  public should_open_history = false;

  @Inject(MAT_DIALOG_DATA) private data: any;


  constructor( private _bottomSheet: MatBottomSheet, public dialog: MatDialog ) { }

  ngOnInit() {
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


  openBottomWarning(): void {
    this._bottomSheet.open(CusBottomWarn);
  }

  lineChartData: ChartDataSets[] = [
    { data: [99, 95.2, 91.0, 76.3, 70.1, 63], label: 'Prepayment Credits' },
  ];

  lineChartLabels: Label[] = ['1st', '3rd', '5th', '7th', '9th', '11th'];

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
         labelString: 'Day of the Month [December]'
      }
   }]
 }//END scales
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

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