import { Injectable } from '@angular/core';
import { Observable, ObservableLike } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
import * as firebase from 'firebase';
import 'firebase/firestore';
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

  checkAC(AC) {
    console.log(AC)
    this.db.doc('account/1').set({
      settings: {
        controlAC: AC
      }
    }
      , { merge: true }
    )
  }

  checkHeater(heater) {
    console.log(heater)
    this.db.doc('account/1').set({
      settings: {
        controlHeater: heater
      }
    }
      , { merge: true }
    )
  }

  checkWashing(washing) {
    console.log(washing)
    this.db.doc('account/1').set({
      settings: {
        controlWashing: washing
      }
    }
      , { merge: true }
    )
  }

  async uploadCredit(credit) {
    let credits = credit;
    const increment = firebase.firestore.FieldValue.increment(credits);

    this.db.doc('account/1').update({
      credits: increment
    })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef);
        console.log(docRef);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }

  newAccount(userID, RECs, consumption, credits, profile, solar) {
    console.log("New account from SubmitFire Service")
    this.db.doc('account/1').set({
      userID, RECs, consumption, credits, profile, solar
    })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef);
        console.log(docRef);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }

  submitMessage(name, communication, comment) {
    console.log("Submitting message")
    const time = firebase.firestore.FieldValue.serverTimestamp()
    this.db.collection('messages').add({
      name: name,
      communicationMethod: communication,
      comments: comment,
      timestamp: time
    })
  }

  // getAccounts() {
  //   return this.Accounts
  // }
}
