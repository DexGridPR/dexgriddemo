import { Component, OnInit, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Accounts, FirestoredexService } from 'src/app/service/firestoredex.service';

@Component({
  selector: 'app-regacc',
  templateUrl: './regacc.component.html',
  styleUrls: ['./regacc.component.scss']
})
export class RegaccComponent implements OnInit {

  @Input() account: Accounts[];

  constructor( private _accounts: FirestoredexService ) { }

  ngOnInit() {
    this._accounts.getAccounts().subscribe(Account => {
      this.account = Account;
      // const AccountOne = Account[0]
    })
  }

}
