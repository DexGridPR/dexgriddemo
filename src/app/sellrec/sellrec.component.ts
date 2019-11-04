import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../service/web3.service';

@Component({
  selector: 'app-sellrec',
  templateUrl: './sellrec.component.html',
  styleUrls: ['./sellrec.component.scss']
})
export class SellrecComponent implements OnInit {

  constructor(private _web3: Web3Service) { }

  n: number = 13;

  ngOnInit() {
    // var timesclicked;
    // timesclicked = 0;
    var n = this.n;
    document.getElementById("creditnumber").innerHTML = n;

  }

  changec() {
    // if (timesclicked = 0) {
    //   var timesclicked = this.timesclicked;
    // }

    // else {
    //   timesclicked++;
    // }

    var timesclicked;
    var n = this.n;
    if (timesclicked > 0 ) {
      timesclicked = timesclicked + 1;
      n = n - 1;
    }
    else {
      timesclicked = 0;
      timesclicked = timesclicked + 1;
      n = n - 1;
    }



    console.log("timesclicked:", timesclicked);

    console.log("New n:", n);

    document.getElementById("creditnumber").innerHTML = n;
  }

  transfer() {
    console.log("Transfer RECs");
    // alert("Sending RECs");
    // this._web3.Transfer();
  }

  

}
