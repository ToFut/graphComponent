import {Component, OnInit} from '@angular/core';
import {Chart} from 'angular-highcharts';

@Component({
  selector: 'app-graph-component',
  templateUrl: './graph-component.component.html',
  styleUrls: ['./graph-component.component.css']
})
export class GraphComponentComponent implements OnInit {
  chart = new Chart({
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
      categories: ['היום', 'אתמול', '26/09/2016', '24/09/2018', '21/09/2018'],  // --- Data from json
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
      '<tr><td style="text-align: right"> דיוק בחירה: {point.y}% </td></tr>',
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
          y: 1750,
          marker: {
            symbol: 'url(../assets/crown.png)'
          }
        } , 123, 1375, 941], // --- data
        marker: {
          symbol: 'circle'
        }
      }
    ]
  });

  constructor() {
  }

  ngOnInit() {
  }

  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }

}
