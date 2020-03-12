import { Component, OnInit, Input } from '@angular/core';
import { Accounts, FirestoredexService, Bids, Asks } from 'src/app/service/firestoredex.service';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-gridmarket',
  templateUrl: './gridmarket.component.html',
  styleUrls: ['./gridmarket.component.scss']
})
export class GridmarketComponent implements OnInit {

  @Input() Bids: Bids[];
  @Input() Asks: Asks[];

  constructor( private _market: FirestoredexService, private http: Http ) { }

  ngOnInit() {
    this._market.getBids().subscribe(Bids => {
      this.Bids = Bids;
    })

    this._market.getAsks().subscribe(Asks => {
      this.Asks = Asks;
    })
  }

  deleteBids() {
    console.log("Deleting Bids")
    return this.http.post("https://us-central1-dexgriddemo.cloudfunctions.net/deleteBidOrders", { uid: 'current-user-uid' })
  }

}
