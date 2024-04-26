import { Component, ViewChild } from "@angular/core";
import { Period } from "../../mailings.model";
import { ActivatedRoute } from "@angular/router";
import { MailingsService } from "../../mailings.service";
import { Chart } from 'chart.js';
import { getFromToDate, getMonth } from "../../../../app.functions";

@Component({
    templateUrl: "mailings-detail-statistic.component.html",
    styleUrl: "mailings-detail-statistic.component.scss"
})
export class MailingsDetailStatisticComponent {
  @ViewChild('broadcastedTmpl') broadcastedTmpl;
  @ViewChild('buyedTmpl') buyedTmpl;

  mailingId: number;
  periods: Period[];
  broadcastedData: {x:number,y:number}[] = [];
  broadCasted = 0;
  broadCastedAction: number;
  broadCastedPersentage: number;
  buyedData: {x:number,y:number}[] = [];
  buyed = 0;
  buyedAction: number;
  buyedPersentage: number;

  canvas: any;
  ctx: any;
  fromToDate: string;
  constructor(
      private readonly activatedRoute: ActivatedRoute,
      private readonly mailinsService: MailingsService
  ) {}
  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
          this.mailingId = params['id']; // Access the 'id' parameter from the URL
          this.loadPeriod();
      })
  }
  loadPeriod() {
      this.mailinsService
      .period(this.mailingId)
      .subscribe(data => {
          this.periods = data;
          this.fromToDate = getFromToDate(data[0].time, data[data.length-1].time)
          data.forEach(item => {
              this.broadcastedData.push({
                  x: item.time,
                  y: item.broadcasted
              });
              this.broadCasted += item.broadcasted;
              this.buyedData.push({
                x: item.time,
                  y: item.buyed
              });
              this.buyed += item.buyed;
          });
          this.broadCastedAction = data[data.length-1].broadcasted - data[data.length-2].broadcasted
          this.broadCastedPersentage = Math.floor((data[data.length-1].broadcasted/data[data.length-2].broadcasted) * 100);
          
          this.buyedAction = data[data.length-1].buyed-data[data.length-2].buyed
          this.buyedPersentage = Math.floor((data[data.length-1].buyed/data[data.length-2].buyed) * 100);
          this.loadChart()
      })
  }
  loadChart() {
    this.canvas = this.broadcastedTmpl.nativeElement; 
    this.ctx = this.canvas.getContext('2d');
    new Chart(this.ctx, {
      type: 'line',
      
      data: {
        datasets: [{
          label: 'Broadcasted',
          backgroundColor: "rgba(255, 99, 132, 0.0)",
          borderColor: "#3178DE",
          fill: true,
          data: this.broadcastedData,
        }]
      },
      options: {
        plugins: {
            legend: false,
        },
        responsive: true,
        scales: {
          xAxes: [{
            type: 'linear',
            position: 'bottom',
            ticks: {
              userCallback: (tick: number) => {
                return getMonth(new Date(tick).getMonth()) + " " + new Date(tick).getDate();
              }
            },
            scaleLabel: {
              labelString: 'Date',
              display: false,
            }
          }],
          yAxes: [{
            type: 'linear',
            ticks: {
              userCallback: function (tick) {
                return tick.toString();
              }
            },
            scaleLabel: {
              labelString: 'Buyed',
              display: false
            }
          }]
        }
      }
    });

    this.canvas = this.buyedTmpl.nativeElement; 
    this.ctx = this.canvas.getContext('2d');
    new Chart(this.ctx, {
      type: 'line',
      
      data: {
        datasets: [{
          label: 'Buyed',
          backgroundColor: "rgba(255, 99, 132, 0.0)",
          borderColor: "#4CC063",
          fill: true,
          data: this.buyedData,
        }]
      },
      options: {
        plugins: {
            legend: false,
        },
        responsive: true,
        scales: {
          xAxes: [{
            type: 'linear',
            position: 'bottom',
            ticks: {
              userCallback: (tick: number) => {
                return getMonth(new Date(tick).getMonth()) + " " + new Date(tick).getDate();
              }
            },
            scaleLabel: {
              labelString: 'Date',
              display: false,
            }
          }],
          yAxes: [{
            type: 'linear',
            ticks: {
              userCallback: function (tick) {
                return tick.toString();
              }
            },
            scaleLabel: {
              labelString: 'Buyed',
              display: false
            }
          }]
        }
      }
    });
  }
}
