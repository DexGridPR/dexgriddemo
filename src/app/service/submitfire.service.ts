import { Injectable } from '@angular/core';
import { Observable, ObservableLike } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
import * as firebase from 'firebase';
// import { Projects } from './models/projects';
import { NgForm } from '@angular/forms';


export class Account {
  id?: string;
  credit?: number;
  conID?: string;
  genID?: string;
  address?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SubmitfireService {

  Account: Observable<Account[]>;

  constructor(private db: AngularFirestore) { 
    this.Account = this.db.collection('account').valueChanges();
  }

  async uploadCredit(credit) {
    let credits = credit;
    const increment = firebase.firestore.FieldValue.increment(credits);

    this.db.doc('account/1').update({
      credits: increment
    })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef);
      console.log(docRef);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
  } 
  
  // getAccounts() {
  //   return this.Accounts
  // }
}
