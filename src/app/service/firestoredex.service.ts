import { Injectable } from '@angular/core';
import { Observable, ObservableLike } from 'rxjs';
import { AngularFirestoreModule, AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
import * as firebase from 'firebase';

export class Prices {
  rain?: string;
  inches?: string;
  sun?: string;
  wind?: string;
}

export class Sales {
  rain?: string;
  inches?: string;
  sun?: string;
  wind?: string;
}

export class Rains {
  rain?: string;
  inches?: string;
  sun?: string;
  wind?: string;
}

export class Accounts {
  userID?: string;
  ethereum?: string
  credits?: number;
  genID?: string;
  conID?: string;
  address?: string;
  name?: string;
  monthGen?: number;
  batteryCharge?: number;
  thirtyDays?: number;
  
}


@Injectable({
  providedIn: 'root'
})
export class FirestoredexService {

  Prices: Observable<Prices[]>;
  Sales: Observable<Sales[]>;
  Rains: Observable<Rains[]>;
  Accounts: Observable<Accounts[]>;

  constructor( private firestore: AngularFirestore ) {
    this.Prices = this.firestore.collection('orders').valueChanges();
    this.Sales = this.firestore.collection('sales').valueChanges();
    this.Rains = this.firestore.collection('incoming').valueChanges();
    this.Accounts = this.firestore.collection('account').valueChanges();
   }

  getPrices() {
    return this.Prices;
  }

  getSales() {
    return this.Sales
  }

  getRains() {
    return this.Rains
  }

  getAccounts() {
    return this.Accounts
  }

}
