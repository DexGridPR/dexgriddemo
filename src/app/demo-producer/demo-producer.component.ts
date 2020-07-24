import { Component, OnInit } from '@angular/core';
import { GoperatorComponent} from '../goperator/goperator.component';
import { GotodemoService } from 'src/app/service/gotodemo.service';
// import { GeneratorComponent} from '../generator/generator.component';

@Component({
  selector: 'app-demo-producer',
  templateUrl: './demo-producer.component.html',
  styleUrls: ['./demo-producer.component.scss']
})
export class DemoProducerComponent implements OnInit {

  constructor( private _gotodemo: GotodemoService) { }

  ngOnInit(): void {
  }

  get should_open_gop(): boolean {
    return this._gotodemo.should_open_gop;
  }

  gop() {
    console.log("Open Grid Operator Portal");
    this._gotodemo.gop();
  }

  get nothing(): boolean {
    return this._gotodemo.nothing;
  }

}
