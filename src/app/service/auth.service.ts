import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  User: User;
  user$: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) { 
    this.user$ = afAuth.authState;
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

  async googleSignin(userID, RECs, consumption, credits, profile, solar, appliances, settings) {
    console.log("Signing you into your Google account");
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user, userID, RECs, consumption, credits, profile, solar, appliances, settings);
  }

  async signOut() {
    await this.afAuth.auth.signOut();

    return this.router.navigate(['/demo']);
  }

  private updateUserData(user, userID, RECs, consumption, credits, profile, solar, appliances, settings) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`account/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      userID, 
      RECs, 
      consumption, 
      credits, 
      profile, 
      solar, 
      appliances, 
      settings,
      createTime: Date.now(),
    };

    return userRef.set(data, { merge: true });

  }

  inputCredits(addSettings) {
    console.log("Updating Credits through auth: ", addSettings)
    return this.updateUserSettings(addSettings)
  }

  private updateUserSettings(addSettings) {
    console.log("Update User Settings")
    const userInfo = this.afAuth.auth;
    console.log("User Info:" , userInfo);
    const Uid = userInfo.currentUser.uid
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`account/${Uid}`);
    console.log("User Ref: " , userRef)
    console.log("User: " , this.User);
    // let Credits: number
    // let Address: number
    const data: User = addSettings
    // {
    //   addSettings,
    //   editTime: Date.now(),
    //   // address: Address
    // }
    return userRef.set(data, { merge: true });
  }
  


}