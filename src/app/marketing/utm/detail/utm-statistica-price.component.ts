import { Component, ViewChild } from "@angular/core";
import { UtmModel, UtmStatistic } from "../utm.model";
import { ActivatedRoute } from "@angular/router";
import { UtmService } from "../utm.service";
import {Chart} from "chart.js"
import { getFromToDate, getMonth } from "../../../app.functions";

@Component({
    templateUrl: 'utm-statistica-price.component.html',
})
export class UtmStatisticaPriceComponent {
    @ViewChild('price') price;
    priceData = {
        rub: [],
        usd: []
    }

    stats: UtmStatistic[];
    utmId: number;
    utm: UtmModel;
    canvas: any;
    ctx: any;
    fromToDate: string;
 
    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly utmService: UtmService
    ) {}

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            this.utmId = params['id']; // Access the 'id' parameter from the URL
            this.loadUtm();
        });
    }

    loadUtm() {
        this.utmService
        .detail(this.utmId)
        .subscribe(data => {
            this.utm = data;
            this.loadPeriod()
        })
    }

    loadPeriod() {
        this.utmService
        .periods(this.utm.name)
        .subscribe(data => {
            this.stats = data;
            data.forEach(item => {
                this.priceData.rub.push({
                    x: item.date,
                    y: item.finance_stats[1].amount
                })
                this.priceData.usd.push({
                    x: item.date,
                    y: item.finance_stats[0].amount
                })
            })
            this.fromToDate = getFromToDate(data[0].date, data[data.length-1].date)
            this.loadChart();
        })
    }

    loadChart() {
        this.canvas = this.price.nativeElement; 
        this.ctx = this.canvas.getContext('2d');
        new Chart(this.ctx, {
          type: 'line',
          data: {
            datasets: [
                {
                    label: 'USD',
                    backgroundColor: "rgba(255, 99, 132, 0.0)",
                    borderColor: "#3178DE",
                    fill: true,
                    data: this.priceData.usd,
                },
                {
                    label: 'RUB',
                    backgroundColor: "rgba(255, 99, 132, 0.0)",
                    borderColor: "#4CC063",
                    fill: true,
                    data: this.priceData.rub,
                }
        ]
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
                }
              }],
              yAxes: [{
                type: 'linear',
                ticks: {
                  userCallback: function (tick) {
                    return tick.toString();
                  }
                }
              }]
            }
          }
        });
    }
}