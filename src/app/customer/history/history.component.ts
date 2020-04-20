import { Component, OnInit, Input } from '@angular/core';
import { FirestoredexService, Accounts } from 'src/app/service/firestoredex.service';
import { AuthService } from 'src/app/service/auth.service';
import { User } from 'src/app/service/user.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  consumption$: any
  consumption: any
  Price: any
  theUser: User
  userConsumption: any
  period: any
  @Input() account: Accounts[];
  public Periods: Array<any>;

  constructor( private _accounts: FirestoredexService, public auth: AuthService, private afs: AngularFirestore ) { }

  ngOnInit() {
    this._accounts.getAccounts().subscribe(Account => {
      this.account = Account;
      // console.log(this.account)
      const AccountOne = Account[0]
      const credits = AccountOne.credits
      // console.log(credits)
    });

    this.auth.user$
    .subscribe(user$ => {
      // console.log(user$.collection('consumption'))
      this.theUser = user$;
      console.log(this.theUser)
      this.period = this.theUser.history
      console.log("this.period: " , this.period)
      this.Periods = user$
      console.log("this.Periods: " , this.Periods)
    });

    this.consumption$ = this.afs.collectionGroup('consumption', ref => ref.where('uid', '==', '0lTqdyQ4p1f6F3044TFsxnoVpb03').orderBy('energyPeriod', 'desc')).valueChanges();

    this.consumption$.subscribe(consumption$ => {
      this.consumption = consumption$;
    })
  }

}
