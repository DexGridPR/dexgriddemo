import { Component, OnInit, Input, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubmitfireService } from 'src/app/service/submitfire.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemePalette } from '@angular/material/core';
import { FirestoredexService } from 'src/app/service/firestoredex.service';
import 'hammerjs';
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { User } from '../../service/user.model';

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
  theUser: User;
  ACcontrol: boolean;
  WashingControl: boolean;
  HeaterControl: boolean;

  @Input() account: Accounts[];

  constructor( private _accounts: FirestoredexService, private _submitfire: SubmitfireService,
    public auth: AuthService, ) { }

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
    });

    this.auth.user$.subscribe(user$ => {
      this.theUser = user$;
      this.ACcontrol = this.theUser.appliances.controlAC
      this.WashingControl = this.theUser.appliances.controlWashing
      this.HeaterControl = this.theUser.appliances.controlHeater
      console.log(this.ACcontrol)
    })
  }

  color: ThemePalette = 'accent';
  checked = this.ACsetting;
  disabled = false;

  setACValue(ACcontrol, e) {
    ACcontrol = this.checked
      console.log(ACcontrol)
      if(e.checked) {
        ACcontrol=true
      }else {
        ACcontrol=false
      }
      this.ACcontrol = ACcontrol
      console.log(ACcontrol)
      return this.changeSettings()
    }
  
  setHeaterValue(heater, e) {
    heater = this.checked
      console.log(heater)
      if(e.checked) {
        heater=true
      }else {
        heater=false
      }
      this.HeaterControl = heater
      console.log("heater: " , heater)
      return this.changeSettings()
    }
  
  setWasherValue(washer, e) {
    washer = this.checked
      console.log(washer)
      if(e.checked) {
        washer=true
      }else {
        washer=false
      }
      this.WashingControl = washer
      console.log(washer)
      return this.changeSettings()
    }

  changeSettings() {
    console.log("Collected Settings: ", this.ACcontrol, this.HeaterControl, this.WashingControl);
    const AC = this.ACcontrol
    const heater = this.HeaterControl
    const washer = this.WashingControl
    return this.auth.changeSettings(AC, heater, washer)
  }

defaultsetACValue(AC, e) {
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

defaultsetHeaterValue(heater, e) {
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

defaultsetWasherValue(washer, e) {
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
