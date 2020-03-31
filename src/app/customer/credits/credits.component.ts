import { Component, OnInit, Input, Injectable } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { HttpClient } from '@angular/common/http';
import { SubmitfireService } from 'src/app/service/submitfire.service';
import { MatDialog } from '@angular/material/dialog';


export class Account {
  id?: string;
  credit?: number;
  conID?: string;
  genID?: string;
  address?: string;
}

export interface Credit {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})

export class CreditsComponent implements OnInit {
  // dialogRef: any;

  // @Input() account: Account[];

  credits: Credit[] = [
    {value: 'credit-0', viewValue: 'Credit Card [..2003]'},
    {value: 'debit-1', viewValue: 'Debit Card [..4005]'},
    {value: 'ATH-2', viewValue: 'ATH Mobile [Popular]'}
  ];

  readonly URL = 'https://us-central1-dexgriddemo.cloudfunctions.net/testFunction'

  constructor(private _submitfire: SubmitfireService, private dialogRef: MatDialog) { }

  ngOnInit() {
    // this._submitfire.getAccounts().subscribe(Account => {
    //   this.account = Account;
    // })
  }

  async submitCreditAmount(creditAmount: number) {
    console.log("Adding" , creditAmount , "credits")
    const credits: number = await creditAmount;
    await this._submitfire.uploadCredit(credits)
    this.dialogRef.closeAll();
  }

}
