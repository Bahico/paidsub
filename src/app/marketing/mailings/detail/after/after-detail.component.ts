import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MailingsService } from "../../mailings.service";
import { MailingsModel } from "../../mailings.model";

@Component({
    templateUrl: 'after-detail.component.html',
    styleUrl: '../detail.scss'
})
export class AfterDetailComponent {
    mailingId: number;
    mailing: MailingsModel;

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
        .detail(this.mailingId)
        .subscribe(data => {
            this.mailing = data;
        })
    }
}