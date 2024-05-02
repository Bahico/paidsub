import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MailingsService } from "../../mailings.service";
import { MailingsModel } from "../../mailings.model";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    templateUrl: 'before-detail-setting.component.html',
    styleUrl: '../detail.scss'
})
export class BeforeDetailSettingComponent {
    mailingId: number;
    mailing: MailingsModel;

    editForm = new FormGroup({
        enabled: new FormControl(false),
        broadcasted: new FormControl(null),
        name: new FormControl(null),
        message: new FormControl(null),
        attachment: new FormControl([])
    })
    
    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly mailingsService: MailingsService,
        private readonly router: Router
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
            this.editForm.patchValue({
                ...<any>data
            })
        })
    }

    save() {
        this.mailingsService
        .updateBefore(this.editForm.getRawValue(), this.mailingId)
        .subscribe(() => {
            this.router.navigate(['/marketing/mailings'])
        })
    }
}