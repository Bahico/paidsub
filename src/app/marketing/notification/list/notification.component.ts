import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NotificationModel } from "../notification.model";
import { NotificationService } from "../notification.service";

@Component({
    templateUrl: "notification.component.html",
})
export class NotificationComponent {
    webinarId: number;
    notifications: NotificationModel[];
    mode: "noData" | "data" = "noData";
    titles = {
        data: "Уведомления перед автовебинаром",
        noData: "Уведомлений пока нет..."
    }
    description = {
        data: "Запись выглядит как видео в прямом эфире, доступ к которому закрывается после окончания трансляции.",
        noData: "Чтобы создать новый, нажмите на кнопку ниже"
    }

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly notificationService: NotificationService
    ) {}
    
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.webinarId = params['webinar-id'];
            this.loadNotification()
        });
    }

    loadNotification() {
        this.notificationService
        .notifications(this.webinarId)
        .subscribe(data => {
            this.notifications = data;
            if(data.length > 0) {
                this.mode = "data";
            } else {
                this.mode = "noData";
            }
        })
    }
}