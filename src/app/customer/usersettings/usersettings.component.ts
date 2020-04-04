import { Component, OnInit, Input, Injectable } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { HttpClient } from '@angular/common/http';
import { SubmitfireService } from 'src/app/service/submitfire.service';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-usersettings',
  templateUrl: './usersettings.component.html',
  styleUrls: ['./usersettings.component.css']
})
export class UsersettingsComponent implements OnInit {

  constructor( public auth: AuthService) { }

  ngOnInit(): void {
  }

  async submitCreditAmount(creditAmount: number) {
    console.log("Adding" , creditAmount , "credits")
    const credits: number = await creditAmount;
    await this.auth.inputCredits(credits)
  }

}
