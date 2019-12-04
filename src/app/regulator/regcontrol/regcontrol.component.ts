import { Component, OnInit, Inject, Injectable, InjectionToken, NgModule, APP_INITIALIZER, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms'
import {MatInputModule} from '@angular/material/input';

import { Web3Service } from '../../service/web3.service';
import { RecService } from '../../service/rec.service';
import { HttpClient } from '@angular/common/http';
import { Observable, interval } from 'rxjs';
import { providers, getDefaultProvider } from 'ethers';
import { environment } from 'src/environments/environment';
import Big from 'big.js';
import { ethers } from 'ethers';
// import Web3 from 'web3';
import * as Web3 from 'web3';

import {MatSliderModule, MatSlider} from '@angular/material/slider';

declare let web3;
declare let require: any;
declare let window: any;
declare let nonce: number;

@Component({
  selector: 'app-regcontrol',
  templateUrl: './regcontrol.component.html',
  styleUrls: ['./regcontrol.component.scss']
})
export class RegcontrolComponent implements OnInit {

  public recs: number;
  public Amount: number;
  public balance: number;
  @Input() RecAmount: any;
  
  constructor( private _web3service: Web3Service, private _mintservice: RecService  ) { 
    // this.rec = this.rec.valueChanges();
    // this.rec = {
    //   rec: 40
    // }
    this.recs = 40
  }

  autoTicks = true;
  disabled = false;
  invert = false;
  max = 500;
  min = 0;
  showTicks = true;
  step = 10;
  thumbLabel = true;
  value = 100;
  vertical = false;

  ngOnInit() {
    this._mintservice.getBalance();

    //Run every few seconds to check on new balance
    interval(100 * 60).subscribe(message => {
      this._mintservice.getBalance();
    })

    this._web3service.tokenBalance.subscribe(
      rec => {
        this.recs = rec; 
      // return this.n;
      // this.rec = rec;
      return this.recs;
      });
  }

  mintRecs(value) {
    console.log("Minting");
    console.log(value);
    console.log(typeof value);
    this._mintservice.mintRec(value);
  }

  transferRec(value) {
    console.log("Transfering Recs");
    this._mintservice.Transfer(value);
  }

}
