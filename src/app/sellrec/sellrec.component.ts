import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../service/web3.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  

  constructor( private _web3: Web3Service ) { 
    // this.rec = this.rec.valueChanges();
    this.rec = {
      amount: 40
    }
  }

  name = "one"; 

  public n: number = 40;
  public b = this.n;
  timesclicked: number = 0;
  credit: any = document.getElementById("creditnumber");
  // public rec: number;

  ngOnInit() {
    // this.rec.subscribe( n => {
    //   this.rec.amount = n 
    // })
    // var timesclicked;
    // timesclicked = 0;
    var n = this.n;
    var number1 = 1;
    var credit = this.credit;
    // console.log(credit);
    // console.log("'credit' Type:", typeof credit)
    // var credit: any = document.getElementById("creditnumber");
    // credit: 12;
    // credit: number;
    // credit.innerHTML = n;
    // credit.value = n;
  }

  transferr(rec) {
    var n = this.n;
    // var rec = this.rec;
    console.log("n:" + n);
    console.log(rec);
    // console.log("recs:" + rec);
    // var n = this.n;
    // var b = this.b;
    // var credit = this.credit;
    // var recs;
    // recs = 5;
    // console.log("transferring", rec, "RECs")
    n = n - rec;
    console.log(n);
    this.n = n;
    return this.n;
    // b = n;
    // console.log(b);
    // document.getElementById("creditnumber").innerHTML = n;
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
