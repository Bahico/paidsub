import { Component, inject } from "@angular/core";
import { WebinarModel } from "../webinar.model";
import { WebinarService } from "../webinar.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: 'webinar-detail.component.html'
})
export class WebinarDetailComponent {
    private readonly webinarService = inject(WebinarService);

    webinar: WebinarModel;
    webinarId: number;

    constructor(
        private readonly activatedRoute: ActivatedRoute
    ) {}
    
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.webinarId = params['id'];
            this.loadWebinar()
          });
    }

    loadWebinar() {
        this.webinarService
        .detail(this.webinarId)
        .subscribe(data => (this.webinar = data))
    }
}