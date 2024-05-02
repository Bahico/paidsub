import { Component, inject } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { WebinarService } from "../webinar.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: 'webinar-create.component.html'
})
export class WebinarCreateComponent {
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
    step = 0;
    titles = {
        0: "Контент",
        1: "Сегмент аудитории",
        2: "Сообщение после трансляции",
        3: "Дата и время запуска"
    };

    next() {
        if (this.step !== 3) {
            ++this.step;
        } else {
            this.webinarService
            .create(this.editForm.getRawValue())
            .subscribe(() => {
                this.router.navigate(['/marketing/webinars']);
            })
        }
    }
}
