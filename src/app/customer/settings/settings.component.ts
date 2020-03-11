import { Component, OnInit, Input, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubmitfireService } from 'src/app/service/submitfire.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemePalette } from '@angular/material/core';
import { FirestoredexService } from 'src/app/service/firestoredex.service';
import 'hammerjs';
import { FormControl } from '@angular/forms';

export class Accounts {
  userID?: string;
  ethereum?: string
  credits?: number;
  genID?: string;
  conID?: string;
  address?: string;
  name?: string;
  monthGen?: number;
  batteryCharge?: number;
  thirtyDays?: number;
  month?: string;
  kWhConsumption?: number;
  creditConsumption?: number;
  controlAC?: boolean;
  heaterControl?: boolean;
  washingControl?: boolean;
  settings?: string;
  // settings?: map;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  ACsetting: boolean;

  @Input() account: Accounts[];

  constructor( private _accounts: FirestoredexService, private _submitfire: SubmitfireService ) { }

  ngOnInit() {
    this._accounts.getAccounts().subscribe(Account => {
      this.account = Account;
      // console.log(this.account)
      const AccountOne = Account[0]
      // console.log(AccountOne)
      // const settings = AccountOne.settings
      // console.log(settings)
      // const ACsetting = settings.controlAC
      // console.log("AC setting: " , ACsetting)
      // const checked = ACsetting
      // console.log("Checked: " , checked)
    })
  }

  color: ThemePalette = 'accent';
  checked = this.ACsetting;
  disabled = false;

setACValue(AC, e) {
  AC = this.checked
    console.log(AC)
    if(e.checked) {
      AC=true
    }else {
      AC=false
    }
    console.log(AC)
    return this._submitfire.checkAC(AC)
  }

setHeaterValue(heater, e) {
  heater = this.checked
    console.log(heater)
    if(e.checked) {
      heater=true
    }else {
      heater=false
    }
    console.log(heater)
    return this._submitfire.checkHeater(heater)
  }

setWasherValue(washer, e) {
  washer = this.checked
    console.log(washer)
    if(e.checked) {
      washer=true
    }else {
      washer=false
    }
    console.log(washer)
    return this._submitfire.checkWashing(washer)
  }

}
