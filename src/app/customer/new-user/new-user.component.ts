import { Component, OnInit, Input, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubmitfireService } from 'src/app/service/submitfire.service';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../service/auth.service';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  emailSent = false;
  email: string;
  errorMessage: string;

  constructor(
    private _submitfire: SubmitfireService,
    public dialog: MatDialog,
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

  async googleSignin() {
    console.log("Logging you in through Google")
    const newAccount = {
      recs: this.recs, 
      consumption: this.consumption, 
      credits: this.credits, 
      solar: this.solar, 
      appliances: this.appliances,
      activated: this.activated,
      address: this.addressDefault,
      ethereum: this.ethereumDefault,
      grid: this.gridDefault,
      conID: this.conID,
      createTime: Date.now(),
    };
    // this._submitfire.newAccount(userID, RECs, consumption, credits, profile, solar, appliances, settings)
    await this.auth.googleSignin(newAccount);

    return this.dialog.closeAll();
  }



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
  gridDefault = "San Juan";
  nameDefault = "Jorge Gonzalez";
  batteryChargeDefault = 9.8;
  monthGenDefault = 89;
  sizeDefault = 5000;
  activated = false;
  defaultEmail = "default@dexgrid.io";
  conID = "0004";

  refridgerator = 2
  airconditioner = 6
  waterheater = 4
  lighting = 2

  march20 = {
    month: "March 2020",
    creditConsumption: 39,
    kWhConsumption: 83
  }

  historical = {
    march20: this.march20
  }
    // january20: {
    //   month: "January 2020",
    //   creditConsumption: 36,
    //   kWhConsumption: 75
    // }
  
    // december19: {
    //   month: "December 2019",
    //   creditConsumption: 43,
    //   kWhConsumption: 92
    // }
  
    // november19: {
    //   month: "November 2019",
    //   creditConsumption: 37,
    //   kWhConsumption: 72
    // }
  
    // october19: {
    //   month: "October 2019",
    //   creditConsumption: 35,
    //   kWhConsumption: 65
    // }
  

  recs = {
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

  solar = {
    batteryCharge: this.batteryChargeDefault,
    monthGen: this.monthGenDefault,
    size: this.sizeDefault,
  }
  appliances = {
    refridgerator: this.refridgerator,
    airconditioner: this.airconditioner,
    waterheater: this.waterheater,
    lighting: this.lighting,
    totalLoad: this.refridgerator + this.airconditioner + this.waterheater + this.lighting,
    controlAC: false,
    controlHeater: false,
    controlWashing: false,
  }

  profile: {
    uid: string,
    email: string,
    displayName: string,
    photoURL: string,
  }

  defaultProfile = {
    displayName: this.nameDefault,
    email: this.defaultEmail,
    photoURL: null,
    uid: null
  }

  // timestamp: FieldValue.serverTimestamp()

  async createAccount() {
    console.log("Creating new account")
    const newAccount = {
      recs: this.recs, 
      consumption: this.consumption, 
      credits: this.credits, 
      Profile: this.defaultProfile,
      solar: this.solar,
      appliances: this.appliances,
      activated: this.activated,
      createTime: Date.now(),
    };
    this._submitfire.newAccount(newAccount)
    return this.dialog.closeAll();
    // this.dialogRef.closeAll();
  }

  async sendEmailLink(email) {
    const newAccount = {
      recs: this.recs, 
      consumption: this.consumption, 
      credits: this.credits, 
      solar: this.solar, 
      appliances: this.appliances,
      activated: this.activated,
      address: this.addressDefault,
      ethereum: this.ethereumDefault,
      grid: this.gridDefault,
      conID: this.conID,
      createTime: Date.now(),
    };
    await this.auth.emailSignin(email, newAccount);
    if (email) {
      return this.emailSent = true;
    }
  }

  // function() {
  //   var deviceToken = localStorage.getItem("DEVICE_TOKEN");
  //   if (!deviceToken) {
  //     var array = new Uint8Array(25);
  //     window.crypto.getRandomValues(array);
  //     deviceToken = Array.prototype.map
  //       .call(array, x => ("00" + x.toString(16)).slice(-2))
  //       .join("");
  //     localStorage.setItem("DEVICE_TOKEN", deviceToken);
  //   }

  //   var widget = new Wyre.Widget({
  //     env: "test",
  //     accountId: "AC_YNWFWXDW3AG",
  //     auth: {
  //       type: "secretKey",
  //       secretKey: deviceToken
  //     },
  //     operation: {
  //       type: "debitcard",
  //       dest: "ethereum:0x98B031783d0efb1E65C4072C6576BaCa0736A912",
  //       sourceCurrency: "USD",
  //       destCurrency: "ETH",
  //       sourceAmount: 10.0
  //     }
  //   });

  //   widget.on("close", function(e) {
  //     // the widget closed before completing the process

  //     if (e.error) {
  //       console.log("there was a problem: ", e.error);
  //     } else {
  //       console.log("the customer closed the widget");
  //     }
  //   });

  //   widget.on("complete", function(event) {
  //     // onboarding was completed successfully!
  //     console.log("Completed", event);
  //   });

  //   document
  //     .getElementById("verify-button")
  //     .addEventListener("click", function(e) {
  //       widget.open();
  //     });
  // }();

}
