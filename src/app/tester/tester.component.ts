import { Component, OnInit } from '@angular/core';
import { RecService } from '../service/rec.service';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.scss']
})
export class TesterComponent implements OnInit {

  test1 = "test";

  constructor(private _recserv: RecService) { }

  ngOnInit() {
    var Value = this._recserv.Value;
    this._recserv.setData(Value);
    // this._recserv.getData();
  }

  changetext() {
    console.log("changing text");

    var test = this.test1;
    console.log(test);

    test = "updated test";
    console.log(test);
  }

  // currentvalue: Value;

  updatevalue(event: Event) {
    // this.currentvalue.amount = (event.target as any).value;
  }

}
