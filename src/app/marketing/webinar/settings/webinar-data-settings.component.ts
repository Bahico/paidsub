import { Component, inject } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { WebinarService } from "../webinar.service";
import { WebinarModel } from "../webinar.model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    templateUrl: 'webinar-data-settings.component.html',
})
export class WebinarDataSettingsComponent {
    private readonly webinarService = inject(WebinarService);
    private readonly router = inject(Router);

    editForm = new FormGroup({
        name: new FormControl(null),
        reg_message: new FormControl(null),
        end_message: new FormControl(null),
        video_id: new FormControl(null),
        target_auditory: new FormControl(null),
        broadcast_type: new FormControl(0),
        broadcast_date: new FormControl(null),
        broadcast_settings: new FormGroup({
            type: new FormControl(null),
            days: new FormControl(null),
            period: new FormControl(null),
            everyDays: new FormControl([]),
            broadcast_every: new FormControl(null),
            time: new FormGroup({
                hours: new FormControl(null),
                minuts: new FormControl(null)
            })
        })
    });

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
        this.editForm.valueChanges.subscribe(data => {
            console.log(data);
            
        })
    }

    loadWebinar() {
        this.webinarService
        .detail(this.webinarId)
        .subscribe(data => {
            this.webinar = data;
            this.editForm.patchValue({
                ...data
            })
        })
    }

    save() {
        this.webinarService
        .update(this.editForm.getRawValue(), this.webinarId)
        .subscribe(() => {
            this.router.navigate(['../../'])
        })
    }
}