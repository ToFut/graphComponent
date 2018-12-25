import {Component, OnInit} from '@angular/core';
import {Chart} from 'angular-highcharts';
import {IData, IGraphValue, json} from '../models/outcome.model';

@Component({
  selector: 'app-graph-component',
  templateUrl: './graph-component.component.html',
  styleUrls: ['./graph-component.component.css']
})
export class GraphComponentComponent implements OnInit {
  demo: IGraphValue[] = json;
  dataList: IData[] = [];
  chart = new Chart();

  constructor() {
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
        categories: this.demo.map(ele => ele.xText),  // --- Data from json
        tickInterval: 1,
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true
          }
        }
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
      tooltip: {
        shared: true,
        useHTML: true,
        headerFormat: '<small style="text-align: right; color: black;">{point.key}</small><table>',
        pointFormat: '<tr><td style="color: {series.color}">כמות הפריטים המקסימלי שזכרת : {point.x} </td> </tr>' +
        '<tr><td style="text-align: right"> דיוק בחירה: {point.y}% </td></tr>', // generic dataContext for all elements
        footerFormat: '</table>',
        valueDecimals: 3
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

  ngOnInit() {
  }

  manageData() {
    this.demo.forEach(ele => {
      this.dataList.push({
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
