import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../service/web3.service';

@Component({
  selector: 'app-sellrec',
  templateUrl: './sellrec.component.html',
  styleUrls: ['./sellrec.component.scss']
})
export class SellrecComponent implements OnInit {

  constructor(private _web3: Web3Service) { }

  ngOnInit() {
    this._web3.Metamask();
  }

  transfer() {
    console.log("Transfer RECs");
    // alert("Sending RECs");
    this._web3.Transfer();
  }

  

}
