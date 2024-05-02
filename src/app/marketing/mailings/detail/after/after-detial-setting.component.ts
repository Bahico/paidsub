import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MailingsService } from "../../mailings.service";
import { MailingsModel } from "../../mailings.model";
import { TariffService } from "../../../../tariff/tariff.service";
import { TariffModel } from "../../../../tariff/tariff.model";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    templateUrl: 'after-detial-setting.component.html',
    styleUrl: '../detail.scss'
})
export class AfterDetailSettingComponent {
    mailingId: number;
    mailing: MailingsModel;
    tariffs: TariffModel[];
    editForm = new FormGroup({
        name: new FormControl(null),
        message: new FormControl(null),
        attachment: new FormControl([]),
        tariffs: new FormControl([])
    })

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly mailingsService: MailingsService,
        private readonly tariffsService: TariffService,
        private readonly router: Router
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
        this.mailingsService
        .updateAfter(this.editForm.getRawValue(), this.mailingId)
        .subscribe(() => {
            this.router.navigate(['/marketing/mailings'])
        })
    }
}