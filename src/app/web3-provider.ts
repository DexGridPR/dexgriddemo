import { Injectable, InjectionToken, Inject } from '@angular/core';
import { providers } from 'ethers';
import Web3 from 'web3';

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

export const WEB3 = new InjectionToken<Web3>('web3', {
  providedIn: 'root',
  factory: () => {
    try {
      const provider = ('ethereum' in window) ? window['ethereum'] : Web3.givenProvider;
      return new Web3(provider);
    } catch (err) {
      // throw new Error('Non-Ethereum browser detected. You should consider trying Mist or MetaMask!');
    }
  }
});