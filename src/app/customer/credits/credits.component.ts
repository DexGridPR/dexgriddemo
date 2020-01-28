import { Component, OnInit } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';

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
  dialogRef: any;

  credits: Credit[] = [
    {value: 'credit-0', viewValue: 'Credit Card [..2003]'},
    {value: 'debit-1', viewValue: 'Debit Card [..4005]'},
    {value: 'ATH-2', viewValue: 'ATH Mobile [Popular]'}
  ];

  constructor() { }

  ngOnInit() {
  }

  submitCreditAmount() {
    // this._operator.closeAccount(operator);
    
    this.dialogRef.close;
  }

}
