import { Component, OnInit, Input, Injectable } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { HttpClient } from '@angular/common/http';
import { SubmitfireService } from 'src/app/service/submitfire.service';
import { AuthService } from 'src/app/service/auth.service';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-usersettings',
  templateUrl: './usersettings.component.html',
  styleUrls: ['./usersettings.component.scss']
})
export class UsersettingsComponent implements OnInit {

  constructor( public auth: AuthService, public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  async submitCreditAmount(creditAmount?: number, email?: string) {
    const credits: number = await creditAmount;
    const addSettings = {
      credits,
      email
    }
    console.log(addSettings)

    await this.clean(addSettings)
    console.log(addSettings)

    this.auth.inputCredits(addSettings);
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

}
