import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NotificationService } from "../notification.service";
import { NotificationModel } from "../notification.model";

@Component({
    templateUrl: 'notification-create.component.html'
})
export class NotificationCreateComponent {
    editForm = new FormGroup({
        before_start_hours: new FormControl(0),
        message: new FormControl(null, [Validators.required,Validators.minLength(1), Validators.maxLength(32)]),
        attachment: new FormControl([], Validators.required),
        day: new FormControl(0),
        hours: new FormControl(0),
        minuts: new FormControl(0),
    });

    webinarId:number;
    notificationId:number;
    notification: NotificationModel;
    mode: "update" | "create" = "create";
    titles = {
        update: "Настройки уведомления",
        create: "Создать уведомление"
    }

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly notificationService: NotificationService,
        private readonly router: Router
    ) {}
    
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.webinarId = params['webinar-id'];
            if (params['id']) {
                this.notificationId = params['id'];
                this.loadNotification()
            }
        });
    }

    loadNotification() {
        this.notificationService
        .detail(this.notificationId, this.webinarId)
        .subscribe(data => {
            this.notification = data;
            this.editForm.patchValue({
                ...data
            })
            this.mode = "update";
        })
    }

    save() {
        if (this.editForm.valid) {
            this[this.mode]();
        }
    }

    create() {
        this.notificationService
        .create(this.webinarId, this.rowValue)
        .subscribe(() => {
            this.router.navigate(['../']);
        })
    }

    update() {
        this.notificationService
        .update(this.webinarId, this.notificationId, this.rowValue)
        .subscribe(() => {
            this.router.navigate(['../../']);
        })
    }

    get rowValue() {
        return {
            before_start_hours: this.beforeStartHours,
            message: this.editForm.get('message').value,
            attachment: this.editForm.get('attachment').value
        }
    }

    get beforeStartHours() {
        let hours = 0;
        hours += typeof this.editForm.controls.hours === 'number' ? this.editForm.controls.hours : 0;
        hours += typeof this.editForm.controls.day === 'number' ? this.editForm.controls.day * 24 : 0;
        hours += typeof this.editForm.controls.minuts === 'number' ? Math.floor(this.editForm.controls.minuts / 60) : 0;
        return hours;
    }
}