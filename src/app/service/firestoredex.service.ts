import { Injectable } from '@angular/core';
import { Observable, ObservableLike } from 'rxjs';
// import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
// import { AngularFireDatabaseModule, AngularFireObject, AngularFireList } from 'angularfire2/database';
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


@Injectable({
  providedIn: 'root'
})
export class FirestoredexService {

  Prices: Observable<Prices[]>;
  Sales: Observable<Sales[]>;

  constructor( private firestore: AngularFirestore ) {
    this.Prices = this.firestore.collection('orders').valueChanges();
    this.Sales = this.firestore.collection('sales').valueChanges();
   }

  getPrices() {
    return this.Prices;
  }

  getSales() {
    return this.Sales
  }

}
