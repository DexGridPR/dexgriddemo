import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color } from 'ng2-charts';

@Component({
  selector: 'app-consumption',
  templateUrl: './consumption.component.html',
  styleUrls: ['./consumption.component.scss']
})
export class ConsumptionComponent implements OnInit {

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
  }

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Morning'], ['Afternoon'], 'Evening'];
  public pieChartData: SingleDataSet = [30, 50, 20];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColor = [
    {
      backgroundColor: [
        '#0A3272',
        '#FBD22D',
        '#FB802D',
      ]
    }
  ];


}
