import { Component } from "@angular/core";
import { UtmModel, UtmStatistic } from "../utm.model";
import { ActivatedRoute } from "@angular/router";
import { UtmService } from "../utm.service";

@Component({
    templateUrl: 'utm-detail.component.html' 
})
export class UtmDetailComponent {
    stats: UtmStatistic;
    utmId: number;
    utm: UtmModel;
 
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
        .period(this.utm.name)
        .subscribe(data => {
            this.stats = data;
        })
    }
}