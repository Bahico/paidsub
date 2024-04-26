import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MailingsService } from "../../mailings.service";
import { MailingsModel } from "../../mailings.model";
import { TariffService } from "../../../../tariff/tariff.service";
import { TariffModel } from "../../../../tariff/tariff.model";

@Component({
    templateUrl: 'after-detial-setting.component.html',
    styleUrl: '../detail.scss'
})
export class AfterDetailSettingComponent {
    mailingId: number;
    mailing: MailingsModel;
    tariffs: TariffModel[];

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly mailingsService: MailingsService,
        private readonly tariffsService: TariffService
    ) {}

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            this.mailingId = params['id']; // Access the 'id' parameter from the URL
            this.loadTariff();
        });

        this.loadTariffs()
    }

    loadTariff() {
        this.mailingsService
        .detail(this.mailingId)
        .subscribe(data => {
            this.mailing = data;
        })
    }

    loadTariffs() {
        this.tariffsService
        .tariff()
        .subscribe(data => {
            this.tariffs = data;
        })
    }

    save() {
        
    }
}