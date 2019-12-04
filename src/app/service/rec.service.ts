import { Injectable, InjectionToken, OnInit, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contract } from 'ethers';
import { HttpClient } from '@angular/common/http';
import Big from 'big.js';
import { ethers, utils } from 'ethers';
import * as Web3 from 'web3';
// import { Promise } from 'q';
import { Subject } from 'rxjs';

declare let Web3: any;
declare let web3;
declare let require: any;
declare let window: any;


@Injectable({
  providedIn: 'root'
})
export class RecService {
  currentValue: any;
  totalSupply: any;

  //From Fireship
  message = 5;
  private messageSource = new BehaviorSubject<string>("0");
  currentMessage = this.messageSource.asObservable();

  recs = 500;
  private recsSource = new BehaviorSubject<string>("500");
  currentRecs = this.recsSource.asObservable();

  // public RecAmount = this.currentValue.asObservable();


  constructor() { }

  //From Fireship
  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  //Mint new REC tokens, requires the address to have
  //the Minter role, which currently is 
  //0xB16cD26B93eFa651dDbAc040ADD0E6bD41Eb1f67
  mintRec = async (value) => {
    let amount: number;
    amount = value;
    console.log("Service minting " + amount + " RECs");
  
    // Connect to the network
    let provider = ethers.getDefaultProvider('rinkeby');
    
    const privateKey = "7DCD03EF7449D63A472DEECFDFE916942E43092329E190407C6C07F3D87A8703";
    let wallet = new ethers.Wallet(privateKey, provider);
  
    //Your wallet
    let walletWithProvider = new ethers.Wallet(privateKey, provider);
  
    //Contract
    const mintContract = "0x75281C0EeeE7CC353b84E38cB91F3927D228c57a";
  
    //Interface
    let abi = [
      'function mint(address account, uint256 amount) public returns (bool)',
      'function balanceOf(address account) public view returns (uint256)',
      'function totalSupply() public view returns (uint256)'
    ]
    console.log("ABI:" + abi);
  
    // We connect to the Contract using a Provider, so we will only
    // have read-only access to the Contract
    let contract = new ethers.Contract(mintContract, abi, provider);
    console.log("Contract:" + contract);
  
    // Create a new instance of the Contract with a Signer, which allows
    // update methods
    // let contractWithSigner = contract.connect(walletWithProvider);
    // ... OR ...
    let contractWithSigner = new Contract(mintContract, abi, wallet)
    console.log("Contract w Signer:" + contractWithSigner);
  
    let account = "0xB16cD26B93eFa651dDbAc040ADD0E6bD41Eb1f67";

    let overrides = {
      gasLimit: 750000
    }
  
    // Set a new Value, which returns the transaction
    let tx = await contractWithSigner.mint(account, amount, overrides);
    console.log(tx.hash);
  
    // The operation is NOT complete yet; we must wait until it is mined
    await tx.wait();
  
    // Call the Contract's balanceOf() method again
    let newBalance = contractWithSigner.totalSupply();
  
    console.log(newBalance);
    // Contract Amoung
  };

  //Transfer REC tokens from 
  //0xB16cD26B93eFa651dDbAc040ADD0E6bD41Eb1f67
  Transfer = async (value) => {
    let amount: number;
    amount = value;
    console.log("Service transfering " + amount + " RECs");
    // const ethers = require('ethers');
  
    // Connect to the network
    let provider = ethers.getDefaultProvider('rinkeby');
    
    const privateKey = "7DCD03EF7449D63A472DEECFDFE916942E43092329E190407C6C07F3D87A8703";
    let wallet = new ethers.Wallet(privateKey, provider);

    //Your wallet
    let walletWithProvider = new ethers.Wallet(privateKey, provider);
  
    //Contract
    const mintContract = "0x75281C0EeeE7CC353b84E38cB91F3927D228c57a";
  
    //Interface
    let abi = [
      'function mint(address account, uint256 amount) public returns (bool)',
      'function balanceOf(address account) public view returns (uint256)',
      'function totalSupply() public view returns (uint256)',
      'function transfer(address recipient, uint256 amount) public returns (bool)'
    ]
    console.log("ABI:" + abi);
  
    // We connect to the Contract using a Provider, so we will only
    // have read-only access to the Contract
    let contract = new ethers.Contract(mintContract, abi, provider);
    console.log("Contract:" + contract);
  
    // Create a new instance of the Contract with a Signer, which allows
    // update methods
    // let contractWithSigner = contract.connect(walletWithProvider);
    // ... OR ...
    let contractWithSigner = new Contract(mintContract, abi, wallet)
    console.log("Contract w Signer:" + contractWithSigner);
  
    let account = "0xdbed4b80ccd377dd536fd4d4c86de9a8dbbc7bb9";

    let overrides = {
      gasLimit: 750000
    }
    
    // Set a new Value, which returns the transaction
    let tx = await contractWithSigner.transfer(account, amount, overrides);
    console.log(tx.hash);
  
    // The operation is NOT complete yet; we must wait until it is mined
    await tx.wait();
  
    // Call the Contract's balanceOf() method again
    let newBalance = contractWithSigner.totalSupply();
  
    console.log(newBalance);
    // Contract Amoung
  };

  getBalance = async () => {
    const ethers = require('ethers');
    console.log("getBalanced on Service");

    let abi = [
      'function balanceOf(address account) public view returns (uint256)'
    ];

    let provider = ethers.getDefaultProvider('rinkeby');

    let contractAddress = "0x75281C0EeeE7CC353b84E38cB91F3927D228c57a";

    let contract = new ethers.Contract(contractAddress, abi, provider);
    console.log("Contract Address: " + contractAddress)

    let address = "0xB16cD26B93eFa651dDbAc040ADD0E6bD41Eb1f67";

    this.currentValue = await contract.balanceOf(address);

    await this.currentValue.toString();
    // return console.log("Current Value: " + this.currentValue);

    // this.message = this.currentValue;
    this.messageSource.next(this.currentValue);
    return console.log("this.message: " + this.currentValue);
  }

  getTotalBalance = async () => {
    const ethers = require('ethers');
    console.log("Service Get Total Balance");

    let abi = [
      // 'function balanceOf(address account) public view returns (uint256)'
      'function totalSupply() public view returns (uint256)'
    ];
    
    let provider = ethers.getDefaultProvider('rinkeby');

    let contractAddress = "0x75281C0EeeE7CC353b84E38cB91F3927D228c57a";

    let contract = new ethers.Contract(contractAddress, abi, provider);
    console.log("Contract Address: " + contractAddress)

    this.totalSupply = await contract.totalSupply();

    await this.totalSupply.toString();
    // return console.log("Current Value: " + this.currentValue);

    // this.message = this.currentValue;
    this.recsSource.next(this.totalSupply);
    return console.log("this.message: " + this.totalSupply);

  };


  ////////////////////////////////////////
  Rec: number = 13;

  Value: number = 15;

  setData(Value) {
    console.log("setData");
    Value = this.Value;
  }


}
