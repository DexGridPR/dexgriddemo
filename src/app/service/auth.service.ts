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
  email: string;
  emailSent = false;

  errorMessage: string;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) { 
    // this.user$ = afAuth.authState;
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`account/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );

    const url = this.router.url;

    if (url.includes('signIn')) {
      this.confirmSignIn(url);
    }
  }

  async googleSignin(newAccount) {
    console.log("Signing you into your Google account");
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user, newAccount);
  }

  async emailSignin(email) {
    const actionCodeSettings = {
      // Your redirect URL
      url: 'http://dexgriddemo.firebaseapp.com/demo',
      handleCodeInApp: true
    };
    console.log(actionCodeSettings, email)

    try {
      await this.afAuth.auth.sendSignInLinkToEmail(
        email,
        actionCodeSettings
      );
      window.localStorage.setItem('emailForSignIn', email);
      this.emailSent = true;
    } catch (err) {
      this.errorMessage = err.message;
      console.log("Error: ", this.errorMessage)
    }
  }

  async confirmSignIn(url) {
    try {
      if (this.afAuth.auth.isSignInWithEmailLink(url)) {
        let email = window.localStorage.getItem('emailForSignIn');

        // If missing email, prompt user for it
        if (!email) {
          email = window.prompt('Please provide your email for confirmation');
        }

        // Signin user and remove the email localStorage
        const result = await this.afAuth.auth.signInWithEmailLink(email, url);
        window.localStorage.removeItem('emailForSignIn');
      }
    } catch (err) {
      this.errorMessage = err.message;
    }
  }

  async signOut() {
    await this.afAuth.auth.signOut();

    return this.router.navigate(['/demo']);
  }

  private async updateUserData(user, newAccount) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`account/${user.uid}`);

    const Profile = {
      conID: newAccount.conID,
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      grid: newAccount.grid,
      address: newAccount.address,
      ethereum: newAccount.ethereum
    }

    await this.clean(Profile)

    const data = {
      Profile: Profile,
      activated: newAccount.activated,
      Credits: newAccount.credits,
      solar: newAccount.solar,
      appliances: newAccount.appliances,
      consumption: newAccount.consumption,
      recs: newAccount.recs,
      createTime: Date.now(),
    };

    await this.clean(data)

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

    const data: User = addSettings;

    return userRef.set(data, { merge: true });
  }

  //Clean out null variables inside of an object
  clean(obj) {
    for (var propName in obj) { 
      if (obj[propName] === null || obj[propName] === undefined) {
        delete obj[propName];
      }
    }
  }

  activateAccount() {
    console.log("Submitfire activating account");
    const addSettings = {activated: true};
    // const userRef: AngularFirestoreDocument<User> = this.afs.doc(`account/${user.uid}`);
    return this.updateUserSettings(addSettings);
  }

  async changeSettings(AC, heater, washer) {
    console.log("Changing Settings in Auth");
    const addSettings = {
      appliances: {
        controlAC: AC,
        controlHeater: heater,
        controlWashing: washer
      }
    }
    await this.clean(addSettings);
    console.log("addsettings: " , addSettings)
    return this.updateUserSettings(addSettings)
  }

}