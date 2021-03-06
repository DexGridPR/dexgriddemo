import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {FormControl, Validators} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SubmitfireService } from 'src/app/service/submitfire.service';
import { AuthService } from 'src/app/service/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailSent = false;
  email: string;
  errorMessage: string;
  accepted = false;
  notAccepted = false;

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  signInBool:boolean = true;

  constructor(    
    private _submitfire: SubmitfireService,
    public dialog: MatDialog,
    public auth: AuthService,
    private router: Router,
    private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }

  navigate() {
    console.log("Opening Signup Page")
    window.open("https://dexgrid.io")
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  signIn() {
    console.log("Change to Sign In");
    this.signInBool = false;
  }

  newAccount() {
    console.log("Change to Sign In");
    this.signInBool = true;
    // window.location.reload();
  }

  logIn() {
    console.log("Logging in existing user")
    window.open("https://dexgriddemo.web.app")
  }

  async googleSignin(email, name) {

    if (this.accepted == false) {
      this.notAccepted = true;
    } else {
      console.log("Logging you in through Google")
      const newAccount = {
        email: email,
        name: name,
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
  
      return this.router.navigate(['/demo']);
    }
  }

  async googleLogin() {
    await this.auth.googleLogin();

    return this.router.navigate(['/demo']);
  }

  async sendEmailLink(email, name) {

    if (this.accepted == false) {
      this.notAccepted = true;
    } else {
      const newAccount = {
        name: name,
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
  };

  consumedDefault = 0;
  purchasedDefault = 100;
  twelveMonthDefault = 71;
  avg12monthDefault = 0.178;
  avgkWhDefault = 65;
  prepay30Default = 100;
  thirtyDaysDefault = 68;
  creditsDefault = 0;
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

  //Opens Bottom bar when clicking information icon
  openBottomSheet(): void {
    this._bottomSheet.open(CusBottomSheet);
    this.notAccepted = false;
  };
  
}

//Terms Component for Bottom Bar
@Component({
  selector: 'bottom-sheet',
  templateUrl: 'sheet.html',
  styleUrls: ['./login.component.scss']
})
export class CusBottomSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<CusBottomSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  closeDialog(): void {
    this._bottomSheetRef.dismiss();
  }
  
}
