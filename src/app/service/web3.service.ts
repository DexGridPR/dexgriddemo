import { Injectable, InjectionToken, OnInit, Inject } from '@angular/core';
import Web3 from 'web3';
import { HttpClient } from '@angular/common/http';
import Big from 'big.js';

declare let Web3: any;
declare let web3;
declare let require: any;
declare let window: any;


@Injectable({
  providedIn: 'root'
})


export class Web3Service {

  constructor() { }

  Transfer() {
    console.log("Transfer Web3");
    const Web3 = require('web3');
    const web3 = require('web3');
    var escrowContract = "0x2ac4a0788FfCc9fb1E50F8BF81535974D8A1b710";
    var src = web3.eth.accounts[0];
    var payee = "0x76c67F724d155bf2725350bDF809460f5636bEc9";
    var Amount = 1;
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

}
