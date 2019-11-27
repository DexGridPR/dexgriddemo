import { Component, OnInit, Inject, Injectable, InjectionToken, NgModule, APP_INITIALIZER } from '@angular/core';
import { Web3Service } from '../service/web3.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { providers, getDefaultProvider } from 'ethers';
import { environment } from 'src/environments/environment';


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

  enableWeb3Provider(provider) {
    console.log(provider, "is provider");
    provider.getDefaultProvider()
  // return () => {
  //   provider.enable();  // Ask the user to enable MetaMask at load time.
  // };
}

transferEth() {
  console.log("Transferring Ether");
  this._web3service.Transfer();
}

  name = "one"; 

  public n: number = 40;
  public b = this.n;
  timesclicked: number = 0;
  credit: any = document.getElementById("creditnumber");
  // public rec: number;

  ngOnInit() {
    var n = this.n;
    var number1 = 1;
    var credit = this.credit;
  }

  transferr(rec) {
    var n = this.n;
    console.log("n:" + n);
    console.log(rec);
    n = n - rec;
    console.log(n);
    this.n = n;
    return this.n;
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

  transfer() {
    console.log("Transfer RECs");
    // alert("Sending RECs");
    // this._web3.Transfer();
  }

  

}
