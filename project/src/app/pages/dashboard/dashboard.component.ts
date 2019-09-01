import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';


@Component({
  // tslint:disable-next-line:component-selector
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {

  public canvas: any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;

  budget = 3000;
  balance = 2458.50;
  goal = 500;
  savings = 370.50;

    ngOnInit() {
      this.chartColor = '#FFFFFF';

      this.canvas = document.getElementById('chartHours');
      this.ctx = this.canvas.getContext('2d');

      this.chartHours = new Chart(this.ctx, {
        type: 'line',

        data: {
          labels: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
          datasets: [{
              borderColor: '#50a075',
              backgroundColor: '#6bd098',
              pointRadius: 2,
              pointHoverRadius: 2,
              borderWidth: 3,
              data: [2700, 3578, 2560.00, 3100.00, 2100.10, 2800.00, 4850.50, 1800.15, 1500.90, 2547.70, 2200.00, 0]
            },
            // {
            //   borderColor: "#f17e5d",
            //   backgroundColor: "#f17e5d",
            //   pointRadius: 0,
            //   pointHoverRadius: 0,
            //   borderWidth: 3,
            //   data: [320, 340, 365, 360, 370, 385, 390, 384, 408, 420]
            // },
            // {
            //   borderColor: "#fcc468",
            //   backgroundColor: "#fcc468",
            //   pointRadius: 0,
            //   pointHoverRadius: 0,
            //   borderWidth: 3,
            //   data: [370, 394, 415, 409, 425, 445, 460, 450, 478, 484]
            // }
          ]
        },
        options: {
          legend: {
            display: false
          },

          tooltips: {
            enabled: false
          },

          scales: {
            yAxes: [{

              ticks: {
                fontColor: '#9f9f9f',
                beginAtZero: false,
                maxTicksLimit: 5,
                // padding: 20
              },
              gridLines: {
                drawBorder: false,
                zeroLineColor: '#ccc',
                color: 'rgba(255,255,255,0.05)'
              }

            }],

            xAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(255,255,255,0.1)',
                zeroLineColor: 'transparent',
                display: false,
              },
              ticks: {
                padding: 20,
                fontColor: '#9f9f9f'
              }
            }]
          },
        }
      });


      this.canvas = document.getElementById('chartEmail');
      this.ctx = this.canvas.getContext('2d');
      this.chartEmail = new Chart(this.ctx, {
        type: 'pie',
        data: {
          labels: [1, 2, 3],
          datasets: [{
            label: 'Spendinge',
            pointRadius: 0,
            pointHoverRadius: 0,
            backgroundColor: [
              '#72e37a',
              '#4acccd',
              '#fcc468',
              '#9375ef',
              '#56efb0',
              '#efdd68',
              '#ef8157',
              '#ef78df',
              '#ef504b'
            ],
            borderWidth: 0,
            data: [20, 25, 40, 15, 50, 55, 5, 32, 10]
          }]
        },

        options: {

          legend: {
            display: false
          },

          pieceLabel: {
            render: 'percentage',
            fontColor: ['white'],
            precision: 2
          },

          tooltips: {
            enabled: false
          },

          scales: {
            yAxes: [{

              ticks: {
                display: false
              },
              gridLines: {
                drawBorder: false,
                zeroLineColor: 'transparent',
                color: 'rgba(255,255,255,0.05)'
              }

            }],

            xAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(255,255,255,0.1)',
                zeroLineColor: 'transparent'
              },
              ticks: {
                display: false,
              }
            }]
          },
        }
      });

      const speedCanvas = document.getElementById('speedChart');

      const dataFirst = {
        data: [522, 151, 78, 580, 30, 40, 260, 50, 15, 150, 350, 157, 20, 50, 0, 0, 0],
        fill: false,
        borderColor: '#fbc658',
        backgroundColor: 'transparent',
        pointBorderColor: '#fbc658',
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
      };

      const speedData = {
        labels: ['01', '03', '05', '07', '09', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '31'],
        datasets: [dataFirst]
      };

      const chartOptions = {
        legend: {
          display: false,
          position: 'top'
        }
      };

      const lineChart = new Chart(speedCanvas, {
        type: 'line',
        hover: false,
        data: speedData,
        options: chartOptions
      });
    }
}
