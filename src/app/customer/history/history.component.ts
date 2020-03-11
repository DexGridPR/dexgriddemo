import { Component, OnInit, Input } from '@angular/core';
import { FirestoredexService, Accounts } from 'src/app/service/firestoredex.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  @Input() account: Accounts[];

  constructor( private _accounts: FirestoredexService ) { }

  ngOnInit() {
    this._accounts.getAccounts().subscribe(Account => {
      this.account = Account;
      // console.log(this.account)
      const AccountOne = Account[0]
      const credits = AccountOne.credits
      // console.log(credits)
    })
  }

}
