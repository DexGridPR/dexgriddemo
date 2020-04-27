import { Injectable } from '@angular/core';
import { Observable, ObservableLike, of } from 'rxjs';
// import { AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
import * as firebase from 'firebase';
import 'firebase/firestore';
// import { Projects } from './models/projects';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/service/user.model';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { switchMap } from 'rxjs/operators';


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
  user$: Observable<any>;

  constructor(private db: AngularFirestore, private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router) {
    this.Account = this.db.collection('account').valueChanges();

    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`account/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
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
    const userInfo = this.afAuth.auth;
    console.log("User Info:" , userInfo);
    const Uid = userInfo.currentUser.uid
    console.log("Uid: ", Uid)
    const increment = firebase.firestore.FieldValue.increment(credits);

    this.db.doc(`account/${Uid}`).update({
      Credits: increment
    })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef);
        console.log(docRef);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }

  newAccount(newAccount) {
    console.log("New account from SubmitFire Service");
    console.log("newProfile: " , newAccount);
    this.db.collection('account').add(newAccount)
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

  private updateUserSettings(addSettings) {
    console.log("Update User Settings")
    const userInfo = this.afAuth.auth;
    console.log("User Info:" , userInfo);
    const Uid = userInfo.currentUser.uid
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`account/${Uid}`);
    console.log("User Ref: " , userRef)

    const data: User = addSettings;

    return userRef.set(data, { merge: true });
  }

}
