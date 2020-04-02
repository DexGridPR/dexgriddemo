import { Component, OnInit, Input, Injectable } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { HttpClient } from '@angular/common/http';
import { SubmitfireService } from 'src/app/service/submitfire.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-usersettings',
  templateUrl: './usersettings.component.html',
  styleUrls: ['./usersettings.component.css']
})
export class UsersettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  async submitCreditAmount(creditAmount: number) {
    console.log("Adding" , creditAmount , "credits")
    const credits: number = await creditAmount;
    await this._submitfire.uploadCredit(credits)
    this.dialogRef.closeAll();
  }

}
