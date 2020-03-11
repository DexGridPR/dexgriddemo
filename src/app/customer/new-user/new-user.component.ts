import { Component, OnInit, Input, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubmitfireService } from 'src/app/service/submitfire.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  constructor( private _submitfire: SubmitfireService, public dialog: MatDialog ) { }

  ngOnInit() {
  }

  userIDDefault = "o001";
  consumedDefault = 0;
  purchasedDefault = 100;
  twelveMonthDefault = 71;
  avg12monthDefault = 0.178;
  avgkWhDefault = 65;
  prepay30Default = 100;
  thirtyDaysDefault = 68;
  creditsDefault = 64;
  addressDefault = "100 Calle San Francisco, San Juan, PR 00901";
  ethereumDefault = "0xtT....oP7E";
  gridDefault = "San Juan MicroGrid";
  nameDefault = "Jorge Gonzalez";
  batteryChargeDefault = 9.8;
  monthGenDefault = 89;
  sizeDefault = 5;

  february20 = {
    month: "February 2020",
    creditConsumption: 39,
    kWhConsumption: 83
  }

  january20 = {
    month: "January 2020",
    creditConsumption: 36,
    kWhConsumption: 75
  }

  december19 = {
    month: "December 2019",
    creditConsumption: 43,
    kWhConsumption: 92
  }

  november19 = {
    month: "November 2019",
    creditConsumption: 37,
    kWhConsumption: 72
  }

  october19 = {
    month: "October 2019",
    creditConsumption: 35,
    kWhConsumption: 65
  }

  september19 = {
    month: "September 2019",
    creditConsumption: 39,
    kWhConsumption: 75
  }

  historical = {
    february20: this.february20,
    january20: this.january20,
    december19: this.december19,
    november19: this.november19,
    october19: this.october19,
    september19: this.september19
  }
  
    userID = this.userIDDefault
    RECs = {
      consumed: this.consumedDefault,
      purchased: this.purchasedDefault,
      twelveMonth: this.twelveMonthDefault,
    }
    consumption = {
      avg12month: this.twelveMonthDefault,
      avgkWh: this.avg12monthDefault,
      prepay30: this.prepay30Default,
      thirtyDays: this.thirtyDaysDefault,
      historical: this.historical, 
    }
    credits = this.creditsDefault
    profile = {
      address: this.addressDefault,
      ethereum: this.ethereumDefault,
      grid: this.gridDefault,
      name: this.nameDefault,
      userID: this.userIDDefault,
    }
    solar = {
      batteryCharge: this.batteryChargeDefault,
      monthGen: this.monthGenDefault,
      size: this.sizeDefault,
    }

    // timestamp: FieldValue.serverTimestamp()
  

  async createAccount() {
    console.log("Creating new Account")
    const userID = await this.userID;
    const RECs = await this.RECs
    const consumption = await this.consumption
    const credits = await this.credits
    const profile = await this.profile
    const solar = await this.solar
    this._submitfire.newAccount(userID, RECs, consumption, credits, profile, solar)
    return this.dialog.closeAll();
    // this.dialogRef.closeAll();
  }

}
