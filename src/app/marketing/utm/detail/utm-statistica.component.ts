import { Component, ViewChild } from "@angular/core";
import { UtmService } from "../utm.service";
import { ActivatedRoute } from "@angular/router";
import { UtmModel, UtmStatistic } from "../utm.model";
import { getFromToDate, getMonth } from "../../../app.functions";
import { Chart } from 'chart.js';

interface Data {
    data: {x: number, y: number}[];
    sum: number;
    action: number;
    persentage: number;
    color: string;
}; 
type DataAll = {
    [key: string]: Data;
  };

@Component({
    templateUrl: 'utm-statistica.component.html',
    styleUrl: 'utm-statistica.component.scss'
})
export class UtmStatisticaComponent {
    @ViewChild('users_count_tmpl') users_count_tmpl;
    @ViewChild('buyed_subs_users_count_tmpl') buyed_subs_users_count_tmpl;
    @ViewChild('inactive_users_count_tmpl') inactive_users_count_tmpl;
    @ViewChild('not_prolong_subs_users_count_tmpl') not_prolong_subs_users_count_tmpl;

    
    stats: UtmStatistic[];
    data:DataAll = {
        users_count: {
            data: [],
            sum: 0,
            action: 0,
            persentage: 0,
            color: "#3178DE"
        },
        inactive_users_count: {
            data: [],
            sum: 0,
            action: 0,
            persentage: 0,
            color: "#B84041"
        },
        buyed_subs_users_count: {
            data: [],
            sum: 0,
            action: 0,
            persentage: 0,
            color: "#4CC063"
        },
        not_prolong_subs_users_count: {
            data: [],
            sum: 0,
            action: 0,
            persentage: 0,
            color: "#F7931A"
        }
    };
    canvas: any;
    ctx: any;
    utmId: number;
    utm: UtmModel;
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
            this.loadPeriods()
        })
    }

    loadPeriods() {
        this.utmService
        .periods(this.utm.name)
        .subscribe(data => {
            this.stats = data;
            this.fromToDate = getFromToDate(data[0].date, data[data.length-1].date);

            this.calculateInfos("users_count", this.users_count_tmpl);
            this.calculateInfos("inactive_users_count", this.inactive_users_count_tmpl);
            this.calculateInfos("buyed_subs_users_count", this.buyed_subs_users_count_tmpl);
            this.calculateInfos('not_prolong_subs_users_count', this.not_prolong_subs_users_count_tmpl)
        })
    }

    calculateInfos(name: string, tmpl: any) {
        this.stats.forEach(item => {
            this.data[name].data.push({
                x: item.date,
                y: item[name]
            });
            this.data[name].sum += item[name];
        })
        this.data[name].action = this.stats[this.stats.length-1][name] - this.stats[this.stats.length-2][name];
        this.data[name].persentage = Math.floor((this.stats[this.stats.length-1][name] / this.stats[this.stats.length-2][name]) * 100);
        
        this.loadChart(tmpl, this.data[name].data, this.data[name].color);
    }

    loadChart(tmpl: any, data: any, color: string) {
        this.canvas = tmpl.nativeElement; 
        this.ctx = this.canvas.getContext('2d');
        new Chart(this.ctx, {
          type: 'line',
          
          data: {
            datasets: [{
              label: 'Broadcasted',
              backgroundColor: "rgba(255, 99, 132, 0.0)",
              borderColor: color,
              fill: true,
              data: data,
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