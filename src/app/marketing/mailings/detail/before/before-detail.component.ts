import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MailingsService } from "../../mailings.service";

@Component({
    templateUrl: 'before-detail.component.html',
    styleUrl: '../detail.scss'
})
export class BeforeDetailComponent {
    mailingId: number;
    period: any;

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly mailingsService: MailingsService
    ) {}

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            this.mailingId = params['id']; // Access the 'id' parameter from the URL
            this.loadTariff();
          });
    }

    loadTariff() {
        this.mailingsService
        .period(this.mailingId)
        .subscribe(data => {
            this.period = data;
        })
    }
}