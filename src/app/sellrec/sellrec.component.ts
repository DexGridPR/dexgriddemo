import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../service/web3.service';

@Component({
  selector: 'app-sellrec',
  templateUrl: './sellrec.component.html',
  styleUrls: ['./sellrec.component.scss']
})
export class SellrecComponent implements OnInit {

  constructor(private _web3: Web3Service) { }

  name = "one"; 

  n: number = 13;
  b = this.n;
  timesclicked: number = 0;
  credit: any = document.getElementById("creditnumber");

  ngOnInit() {
    // var timesclicked;
    // timesclicked = 0;
    var n = this.n;
    var number1 = 1;
    var credit = this.credit;
    console.log(credit);
    console.log("'credit' Type:", typeof credit)
    // var credit: any = document.getElementById("creditnumber");
    // credit: 12;
    // credit: number;
    // credit.innerHTML = n;
    // credit.value = n;


  }

  transferr(recs) {
    var n = this.n;
    var credit = this.credit;
    // var recs;
    // recs = 5;
    console.log("transferring", recs, "RECs")
    n = n - recs;
    // document.getElementById("creditnumber").innerHTML = n;

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
