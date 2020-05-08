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
  newAccount: any

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
    };
  }

  async googleSignin(newAccount) {
    console.log("Signing you into your Google account");
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user, newAccount);
  }

  async googleLogin() {
    console.log("Logging in using Google account");
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    const user = credential.user;
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`account/${user.uid}`);
  }

  async emailSignin(email, newAccount) {
    const actionCodeSettings = {
      // Your redirect URL
      url: 'http://dexgriddemo.web.app/demo',
      handleCodeInApp: true
    };
    console.log(actionCodeSettings, email)

    try {
      await this.afAuth.auth.sendSignInLinkToEmail(
        email,
        actionCodeSettings
      );
      window.localStorage.setItem('emailForSignIn', email);
      console.log("Storing in localStore: ", email);
      this.emailSent = true;
      this.newAccount = newAccount;
    } catch (err) {
      this.errorMessage = err.message;
      console.log("Error: ", this.errorMessage)
    }
  };

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
        console.log(result)
        const user = result;
        const newAccount = this.newAccount;
        window.localStorage.removeItem('emailForSignIn');
        return this.updateUserData(user.user, newAccount);

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
    console.log("Updating User Data")
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`account/${user.uid}`);

    const Profile = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      grid: "San Juan",
      address: "151 Calle San Francisco",
      ethereum: "0xiT5....uU6T"
    }

    const solar = {
      batteryCharge: 9,
      monthGen: 54,
      size: 5000,
    }

    const appliances = {
      refridgerator: 2,
      airconditioner: 6,
      waterheater: 4,
      lighting: 2,
      totalLoad: 2 + 6 + 4 + 2,
      controlAC: false,
      controlHeater: false,
      controlWashing: false,
    }

    const consumption = {
      avg12month: 65,
      avgkWh: 0.178,
      prepay30: 100,
      thirtyDays: 68,
    }

    const recs = {
      consumed: 0,
      purchased: 100,
      twelveMonth: 71,
    }

    const march20 = {
      month: "March 2020",
      creditConsumption: 39,
      kWhConsumption: 83
    }
  
    const historical = {
      march20: march20
    }

    await this.clean(Profile)

    const data = {
      Profile: Profile,
      activated: false,
      Credits: 60,
      solar: solar,
      appliances: appliances,
      consumption: consumption,
      recs: recs,
      historical: historical,
      createTime: Date.now(),
    };

    await this.clean(data)

    return userRef.set(data, { merge: true });

  };

  inputCredits(addSettings) {
    console.log("Updating Credits through auth: ", addSettings)
    return this.updateUserSettings(addSettings)
  };

  private updateUserSettings(addSettings) {
    console.log("Update User Settings")
    const userInfo = this.afAuth.auth;
    console.log("User Info:" , userInfo);
    const Uid = userInfo.currentUser.uid
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`account/${Uid}`);
    console.log("User Ref: " , userRef)

    const data: User = addSettings;

    return userRef.set(data, { merge: true });
  };

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
    const addSettings = {
      activated: true,
      order: {
        ask: true,
        bid: true,
      }
    };
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