import { Component, OnInit, Input, Injectable  } from '@angular/core';
import { FirestoredexService } from 'src/app/service/firestoredex.service';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
import * as firebase from 'firebase';
import 'firebase/firestore';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


export class Prices {
  inches?: string;
  rain?: string;
  sun?: string;
  wind?: string;
}

export class Sales {
  inches?: string;
  rain?: string;
  sun?: string;
  wind?: string;
}

@Component({
  selector: 'app-themarket',
  templateUrl: './themarket.component.html',
  styleUrls: ['./themarket.component.scss']
})
export class ThemarketComponent implements OnInit {

  @Input() price: Prices[];

  @Input() sale: Sales[];

  constructor( private _fireservice: FirestoredexService ) { }

  ngOnInit() {
    this._fireservice.getPrices().subscribe(Prices => {
      console.log(Prices);
      this.price = Prices;
    })

    this._fireservice.getSales().subscribe(Sales => {
      console.log(Sales);
      this.sale = Sales;
    })
  }


}
