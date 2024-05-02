import { Component, inject } from "@angular/core";
import { WebinarService } from "../webinar.service";
import { WebinarModel } from "../webinar.model";
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    templateUrl: 'webinar-general-settings.component.html',
    styles: [`
        .video {
            display: flex;
            align-items: center;
            p {
                margin-left: 10px;
            }
        }
    `]
})
export class WebinarGeneralSettingsComponent {
    private readonly webinarService = inject(WebinarService);
    private readonly router = inject(Router);

    editForm = new FormGroup({
        name: new FormControl(null),
        reg_message: new FormControl(null),
        video_id: new FormControl(null),
        target_auditory: new FormControl(null),
        broadcast_type: new FormControl(0),
        broadcast_date: new FormControl(null),
        broadcast_every: new FormGroup({
            type: new FormControl(null),
            days: new FormControl(null),
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