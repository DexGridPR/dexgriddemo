import { Component, OnInit, Inject, Injectable, InjectionToken, NgModule, APP_INITIALIZER } from '@angular/core';
import { Web3Service } from '../service/web3.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { providers, getDefaultProvider } from 'ethers';
import { environment } from 'src/environments/environment';
import Big from 'big.js';
import { ethers } from 'ethers';
// import Web3 from 'web3';
import * as Web3 from 'web3';

declare let web3;
declare let require: any;
declare let window: any;
declare let nonce: number;

// var providerBridge = new ProviderBridge(provider, signer);
// var web3 = new Web3(provider);

// someLongRunningPromise().then(function(signer, provider) {
//     providerBridge.connectEthers(provider, signer);

//     // Alternatively, if you want to connect to a standard Web3 provider anyways
//     // providerBridge.connectWeb3(someWeb3Provider);
// });


// First, we define the tree-shakable InjectionToken MetamaskWeb3Provider, 
// and instruct it to inject the Ethereum web3 provider injected by the 
// MetaMask windows.ethereum.

// export const MetamaskWeb3Provider = new InjectionToken('Metamask Web3 provider', {
//   providedIn: 'root',
//   factory: () => (window as any).ethereum
// });

// @Injectable({ providedIn: 'root' })

// export class Provider extends providers.Web3Provider {

//   constructor(@Inject(MetamaskWeb3Provider) web3Provider) {
//     super(web3Provider);
//   }
// }

// metaMaskEnable$ = createEffect(() =>
// this.actions$.pipe(
//   ofType(Web3ProviderActions.init),

//   exhaustMap(() => {
//     if ('enable' in this.web3Provider) {
//       return from(this.web3Provider.enable()).pipe(
//         tap((ethAccounts: string[]) =>
//           console.log(
//             'Ethereum provider has been granted access to the following accounts',
//             ethAccounts
//           )
//         ),
//         map((ethAccounts: string[]) => {
//           if (ethAccounts.length === 0) {
//             return ErrorActions.errorMessage({
//               errorMsg: 'Can not get any user accounts'
//             });
//           }

//           return Web3ProviderActions.initSuccess();
//         }),

//         // User denied account access
//         catchError((err: Error) =>
//           of(ErrorActions.errorMessage({ errorMsg: err.message }))
//         )
//       );
//     }

//     return empty;
//   })
// )
// );

// export const PROVIDER = new InjectionToken<providers.BaseProvider>('Ethereum Provider', {
//   providedIn: 'root',
//   factory: () => getDefaultProvider(environment.network)
// });

const WEB3PROVIDER = new InjectionToken('Web3 provider', {
  providedIn: 'root',
  factory: () => (window as any).ethereum
});
@Injectable({ providedIn: 'root' })
export class Provider extends providers.Web3Provider {

  constructor(@Inject(WEB3PROVIDER) web3Provider) {
    super(web3Provider);
  }
}
// export function enableWeb3Provider(provider) {
//   return () => {
//     provider.enable();  // Ask the user to enable MetaMask at load time.
//   };
// }


export class Rec {
  amount: number;
}

export interface B {
  amount: number;
}

export class B {
  amount: number;
}


@Component({
  selector: 'app-sellrec',
  templateUrl: './sellrec.component.html',
  styleUrls: ['./sellrec.component.scss']
})
export class SellrecComponent implements OnInit {

  public rec: Rec;
  
  constructor( private _web3service: Web3Service ) { 
    // this.rec = this.rec.valueChanges();
    this.rec = {
      amount: 40
    }
  }

  ngOnInit() {
    var n = this.n;
    var number1 = 1;
    var credit = this.credit;

    // function enableWeb3Provider(provider) {
    //   console.log("Running app.module function enableWeb3Provider");
    //   console.log("Provider:", provider)
    //   return () => {
    //     ethers.provider.enable();  // Ask the user to enable MetaMask at load time.
    //   };
    // }

    // The network will be automatically detected; if the network is
// changed in MetaMask, it causes a page refresh.
  let currentProvider = new web3.providers.HttpProvider('http://localhost:4200');
  let provider = new ethers.providers.Web3Provider(currentProvider);
  }

  enableWeb3Provider() {
    console.log(providers, "is provider");
    // providers.getDefaultProvider()
  // return () => {
  //   provider.enable();  // Ask the user to enable MetaMask at load time.
  // };
}


transactionE(Amount) {
  console.log("Transferring Ether through Ethers");
  this._web3service.transactionE(Amount);
}

transferE() {
  console.log("Transferring Ether");
  this._web3service.TransferE();
}

transfer(Amount) {
  console.log(Amount);
  console.log(typeof Amount)
  console.log("Transfer RECs");
  // alert("Sending RECs");
  this._web3service.Transfer(Amount);
}

  name = "one"; 

  public n: number = 40;
  public b = this.n;
  timesclicked: number = 0;
  credit: any = document.getElementById("creditnumber");
  // public rec: number;

  transferr(rec) {
    var n = this.n;
    console.log("n:" + n);
    console.log(rec);
    n = n - rec;
    console.log(n);
    this.n = n;
    return this.n;
  }

  Metamask() {
    console.log("Metamask");
    this._web3service.Metamask();
  }

  console() {
    var n = this.n;
    console.log(this.n);
  }
  

  changec() {
    // if (timesclicked = 0) {
    //   var timesclicked = this.timesclicked;
    // }

    // else {
    //   timesclicked++;
    // }

    var n = this.n;
    var timesclicked = this.timesclicked;

    if (n < 13 ) {
      console.log("n > 0")
      timesclicked = timesclicked + 1;
      // n = n - timesclicked;
    }
    else {
      console.log("timesclicked = 0")
      // timesclicked = 0;
      timesclicked += timesclicked;
      n = n - 1;
    }

    // timesclicked = timesclicked + 1;

    console.log("timesclicked:", timesclicked);

    console.log("New n:", n);

    // document.getElementById("creditnumber").innerHTML = n;
  }



  

}
