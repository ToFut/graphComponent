import {Component, Input, OnInit} from '@angular/core';
import {Chart} from 'angular-highcharts';
import {IData, IGraphValue, json} from '../models/outcome.model';

@Component({
  selector: 'app-graph-component',
  templateUrl: './graph-component.component.html',
  styleUrls: ['./graph-component.component.css']
})
export class GraphComponentComponent implements OnInit {
  @Input() tooltiptemlate: string;
  @Input() data: IGraphValue[];
  @Input() tooltipType: string;

  dataList: IData[] = [];
  chart = new Chart();

  constructor() {
  }

  ngOnInit() {
    this.manageData();
    this.chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'GraphComponent title'
      },
      subtitle: {
        text: 'GraphComponent subTitle'
      },
      yAxis: [{ // --- Primary yAxis
        title: {
          text: 'yAxis'
        }
      }],
      xAxis: { // --- Primary xAxis
        title: {text: 'xAxis'},
        categories: this.data.map(ele => ele.xText),  // --- Data from json
        tickInterval: 1,
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true
          }
        }
      },
      tooltip: {
        shared: true,
        useHTML: true,
        headerFormat: '<small style="text-align: right; color: black;">{point.x}</small><table>',
        pointFormat: this.tooltiptemlate  , // generic dataContext for all elements
        valueDecimals: 3
      },
      responsive: { // responsive view
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              enabled: false
            }
          }
        }]
      },
      credits: {
        enabled: false
      },
      series: [  // --- data
        {
          name: 'Demo json',
          data: this.dataList,

        }]
    });

  }

  manageData() {
    this.data.forEach(ele => {
      this.dataList.push({
        name: ele.dataContext[this.tooltipType],
        y: ele.value,
        marker: {
          symbol: ele.badge,
        },
      });
    });
  }

  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }

}
