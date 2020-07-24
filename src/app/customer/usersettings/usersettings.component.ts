import { Component, OnInit, Input, Injectable } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { HttpClient } from '@angular/common/http';
import { SubmitfireService } from 'src/app/service/submitfire.service';
import { AuthService } from 'src/app/service/auth.service';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { SettingsComponent } from 'src/app/customer/settings/settings.component';

@Component({
  selector: 'app-usersettings',
  templateUrl: './usersettings.component.html',
  styleUrls: ['./usersettings.component.scss']
})
export class UsersettingsComponent implements OnInit {

  constructor( public auth: AuthService, public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  async submitCreditAmount(
    pvsystem?: number, email?: string, grid?: string, displayName?: string,
    airconditioner?: number, lighting?: number, refridgerator?: number,
    waterheater?: number, totalAppliances?: number, batterySize?: number ) {
    const profile = {
      email,
      displayName,
      grid
    }
    const appliances = {
      airconditioner,
      lighting,
      refridgerator,
      waterheater,
      totalAppliances
    }
    // const settings = {
    //   controlAC,
    //   controlHeater,
    //   controlWasher
    // }
    await this.clean(profile)
    await this.clean(appliances)


    const addSettings = {
      profile,
      appliances,
      pvsystem,
      email,
      grid,
      // settings,
      // displayName,
      // pvsystem,
      // batterySize,
      // appliances,
      // consumption,
      // controlSettings
    }
    console.log(addSettings)

    await this.clean(addSettings)
    console.log(addSettings)

    this.auth.inputCredits(addSettings);
    return this.dialog.closeAll();
  }

  closeDia() {
    return this.dialog.closeAll();
  }

//Clean out null variables inside of an object
  clean(obj) {
    for (var propName in obj) { 
      if (obj[propName] === null || obj[propName] === undefined) {
        delete obj[propName];
      }
    }
  }

  closeDialog() {
    console.log("Closing User Settings");
    return this.dialog.closeAll();
  }

}
