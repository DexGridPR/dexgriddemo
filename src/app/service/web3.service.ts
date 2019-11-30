import { Injectable, InjectionToken, OnInit, Inject } from '@angular/core';
// import Web3 from 'web3';
import { HttpClient } from '@angular/common/http';
import Big from 'big.js';
import { ethers, utils } from 'ethers';
// import Web3 from 'web3';
import * as Web3 from 'web3';
import { Promise } from 'q';
import { Subject } from 'rxjs';

declare let Web3: any;
declare let web3;
declare let require: any;
declare let window: any;
let privateKey = "AE0BF8533D32EFBE3F78256B074D1996493B90E4A840ADBE8EA4025CC912FDFA";
let wallet = new ethers.Wallet(privateKey);
let provider = ethers.getDefaultProvider('rinkeby');
let walletWithProvider = new ethers.Wallet(privateKey, provider);

provider.getBalance(wallet.address).then((balance) => {
      let etherString = ethers.utils.formatEther(balance);

});

// Service message commands
// var insertData = function(Amount: number) {
//   this.dataStringSource.next(Amount)
// };



@Injectable({
  providedIn: 'root'
})


export class Web3Service {

  private dataStringSource = new Subject<number>();

  public etherString = new Subject<number>();


  constructor() { }

  getBalance() {
    console.log("Getting Balance");
    let privateKey = "AE0BF8533D32EFBE3F78256B074D1996493B90E4A840ADBE8EA4025CC912FDFA";
    let wallet = new ethers.Wallet(privateKey);

    // Connect a wallet to Rinkeby
    let provider = ethers.getDefaultProvider('rinkeby');
    let walletWithProvider = new ethers.Wallet(privateKey, provider);
    console.log("Wallet Address:", wallet.address);

    // let nonce = provider.getTransactionCount(wallet);
    provider.getBalance(wallet.address).then((balance) => {
      console.log("Balance Type:" + typeof balance);

      // balance is a BigNumber (in wei); format is as a sting (in ether)
      let etherString = ethers.utils.formatEther(balance);
  
      console.log("etherString: " + etherString);
      return etherString;
    });
  }

  getChange() {
    
  };


  public tokenBalance = this.etherString.asObservable();
  

  Transfer(Amount) {
    console.log("Transfer Web3 from");
    console.log("Amount:", Amount);
    // const Web3 = require('web3');
    console.log(Web3);
    // const web3 = require('web3');
    console.log(web3);
    var escrowContract = "0x2ac4a0788FfCc9fb1E50F8BF81535974D8A1b710";
    var src = web3.eth.accounts[0];
    var payee = "0x76c67F724d155bf2725350bDF809460f5636bEc9";
    // var Amount = 1;
    var B = web3.toWei(Amount, "ether");

    let payContractABI = [
      {
        constant: false,
        inputs: [
          {
            name: "recipient",
            type: "address"
          }
        ],
        name: "transferPrimary",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          {
            name: "payee",
            type: "address"
          }
        ],
        name: "withdraw",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "primary",
        outputs: [
          {
            name: "",
            type: "address"
          }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [
          {
            name: "payee",
            type: "address"
          }
        ],
        name: "depositsOf",
        outputs: [
          {
            name: "",
            type: "uint256"
          }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          {
            name: "payee",
            type: "address"
          }
        ],
        name: "deposit",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: "payee",
            type: "address"
          },
          {
            indexed: false,
            name: "weiAmount",
            type: "uint256"
          }
        ],
        name: "Deposited",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: "payee",
            type: "address"
          },
          {
            indexed: false,
            name: "weiAmount",
            type: "uint256"
          }
        ],
        name: "Withdrawn",
        type: "event"
      }
    ];
    var PayContract = web3.eth.contract(payContractABI);

    var payContract = PayContract.at(escrowContract);

    payContract.deposit(payee, { gas: 200000, value: B }, console.log);

  }

  Metamask() {
    console.log('Connecting Metamask');
    web3 = new Web3();
    console.log(web3);
    web3.setProvider(new web3.providers.HttpProvider());
    console.log(web3.setProvider);
    web3.eth.getAccounts();
    // .then(function(accounts) {
    // console.log(accounts);
    // });
  };


  TransferE() {
    console.log("Transfer Web3 from");
    var Amount = 1
    console.log("Amount:", Amount);
    // const Web3 = require('web3');
    console.log(Web3);
    // const web3 = require('web3');
    console.log(web3);
    var escrowContract = "0x2ac4a0788FfCc9fb1E50F8BF81535974D8A1b710";
    var src = web3.eth.accounts[0];
    var payee = "0x76c67F724d155bf2725350bDF809460f5636bEc9";
    // var Amount = 1;
    var B = web3.toWei(Amount, "ether");

    let payContractABI = [
      {
        constant: false,
        inputs: [
          {
            name: "recipient",
            type: "address"
          }
        ],
        name: "transferPrimary",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          {
            name: "payee",
            type: "address"
          }
        ],
        name: "withdraw",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "primary",
        outputs: [
          {
            name: "",
            type: "address"
          }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [
          {
            name: "payee",
            type: "address"
          }
        ],
        name: "depositsOf",
        outputs: [
          {
            name: "",
            type: "uint256"
          }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          {
            name: "payee",
            type: "address"
          }
        ],
        name: "deposit",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: "payee",
            type: "address"
          },
          {
            indexed: false,
            name: "weiAmount",
            type: "uint256"
          }
        ],
        name: "Deposited",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: "payee",
            type: "address"
          },
          {
            indexed: false,
            name: "weiAmount",
            type: "uint256"
          }
        ],
        name: "Withdrawn",
        type: "event"
      }
    ];
    var PayContract = web3.eth.contract(payContractABI);

    var payContract = PayContract.at(escrowContract);

    payContract.deposit(payee, { gas: 200000, value: B }, console.log);

  }

  transactionE (value) {
    const ethers = require('ethers');

    var dataStringSource = this.dataStringSource;
    dataStringSource.next(value);
    console.log("Datastring:", dataStringSource);
    let privateKey = "AE0BF8533D32EFBE3F78256B074D1996493B90E4A840ADBE8EA4025CC912FDFA";
    let wallet = new ethers.Wallet(privateKey);
    // Connect a wallet to Rinkeby
    let provider = ethers.getDefaultProvider('rinkeby');
    let walletWithProvider = new ethers.Wallet(privateKey, provider);
    console.log("Wallet Address:", wallet.address)

    // let nonce = provider.getTransactionCount(wallet);
    var transactionCount = provider.getTransactionCount(wallet.address);
    console.log("Transaction Count:", transactionCount);
    provider.getBalance(wallet.address).then((balance) => {

      // balance is a BigNumber (in wei); format is as a sting (in ether)
      let etherString = ethers.utils.formatEther(balance);
  
      console.log("Balance: " + etherString);
  });
    // console.log("Account Balance:", walletBalance);
    // let nonce = provider.getTransactionCount(); 
    // All properties are optional
    let transaction = {
      nonce: transactionCount,
      gasLimit: 21000,
      gasPrice: utils.bigNumberify("20000000000"),

      to: "0xB16cD26B93eFa651dDbAc040ADD0E6bD41Eb1f67",
      // ... or supports ENS names
      // to: "ricmoo.firefly.eth",

      value: utils.parseEther(value),
      data: "0x",

      // This ensures the transaction cannot be replayed on different networks
      chainId: ethers.utils.getNetwork('rinkeby').chainId
    }
    console.log("transaction:", transaction)


      wallet = wallet.connect(provider); // Set the provider for the wallet
      console.log(wallet);

      let signPromise = wallet.sign(transaction)

      signPromise.then((signedTransaction) => {
  
        console.log("signed transaction:", signedTransaction);
        // "0xf86c808504a817c8008252089488a5c2d9919e46f883eb62f7b8dd9d0cc45bc2
        //    90880de0b6b3a76400008025a05e766fa4bbb395108dc250ec66c2f88355d240
        //    acdc47ab5dfaad46bcf63f2a34a05b2cb6290fd8ff801d07f6767df63c1c3da7
        //    a7b83b53cd6cea3d3075ef9597d5"
  
        // This can now be sent to the Ethereum network

      provider.sendTransaction(signedTransaction).then((tx) => {

          console.log(tx);
          // {
          //    // These will match the above values (excluded properties are zero)
          //    "nonce", "gasLimit", "gasPrice", "to", "value", "data", "chainId"
          //
          //    // These will now be present
          //    "from", "hash", "r", "s", "v"
          //  }
          // Hash:
      });
    })
  }


}
