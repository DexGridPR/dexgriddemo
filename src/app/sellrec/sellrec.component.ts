import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sellrec',
  templateUrl: './sellrec.component.html',
  styleUrls: ['./sellrec.component.scss']
})
export class SellrecComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  transfer() {
    console.log("Transfer RECs");
    
  }

}
