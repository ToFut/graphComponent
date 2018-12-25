import {Component, OnInit} from '@angular/core';
import {Chart} from 'angular-highcharts';

interface IGraphValue {
  value: number;
  xText: string;
  yText: string;
  badge: any;
  dataContext: string;
}
@Component({
  selector: 'app-graph-component',
  templateUrl: './graph-component.component.html',
  styleUrls: ['./graph-component.component.css']
})
export class GraphComponentComponent implements OnInit {
  demo: IGraphValue[] = [{
    value: 1750,
    xText: 'היום',
    yText: '1750',
    badge: 'url(../assets/crown.png)',
    dataContext: '<tr><td style="color: {series.color}">כמות הפריטים המקסימלי שזכרת : {point.x} </td> </tr>' +
    '<tr><td style="text-align: right"> דיוק בחירה: {point.y}% </td></tr>',
  } ,
    {
      value: 123,
      xText: 'אתמול',
      yText: '1750',
      badge: 'circle',
      dataContext: '<tr><td style="color: {series.color}">כמות הפריטים המקסימלי שזכרת : {point.x} </td> </tr>' +
      '<tr><td style="text-align: right"> דיוק בחירה: {point.y}% </td></tr>',
    },
    {
      value: 1375,
      xText: '26/09/2016',
      yText: '1750',
      badge: 'url(../assets/crown.png)',
      dataContext: '<tr><td style="color: {series.color}">כמות הפריטים המקסימלי שזכרת : {point.x} </td> </tr>' +
      '<tr><td style="text-align: right"> דיוק בחירה: {point.y}% </td></tr>',
    },
    {
      value: 941,
      xText: '24/09/2018',
      yText: '1750',
      badge: 'url(../assets/crown.png)',
      dataContext: '<tr><td style="color: {series.color}">כמות הפריטים המקסימלי שזכרת : {point.x} </td> </tr>' +
      '<tr><td style="text-align: right"> דיוק בחירה: {point.y}% </td></tr>',
    },
    {
      value: 941,
      xText: '21/09/2018',
      yText: '1750',
      badge: 'url(../assets/crown.png)',
      dataContext: '<tr><td style="color: {series.color}">כמות הפריטים המקסימלי שזכרת : {point.x} </td> </tr>' +
      '<tr><td style="text-align: right"> דיוק בחירה: {point.y}% </td></tr>',
    }];
  chart = new Chart();

  constructor() {
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
        categories: [this.demo[0].xText, this.demo[1].xText, this.demo[2].xText, this.demo[3].xText, this.demo[4].xText],  // --- Data from json
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
        pointFormat: this.demo[0].dataContext, // generic dataContext for all elements
        footerFormat: '</table>',
        valueDecimals: 3
      },

      credits: {
        enabled: false
      },
      series: [  // --- data
        {
          name: 'Demo json',
          data: [{
            y: this.demo[0].value,
            marker: {
              symbol: this.demo[0].badge
            }
          } , this.demo[1].value, this.demo[2].value, this.demo[3].value], // --- data
          marker: {
            symbol: this.demo[1].badge
          }
        }
      ]
    });
  }

  ngOnInit() {
  }

  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }

}
