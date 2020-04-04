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

  async submitCreditAmount(creditAmount: number, email: string) {
    console.log("Adding" , creditAmount , "credits")
    const credits: number = await creditAmount;
    this.auth.inputCredits(credits, email);
    return this.dialog.closeAll();
  }

}
