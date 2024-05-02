import { Component, inject, OnInit } from "@angular/core";
import { WebinarService } from "../webinar.service";
import { WebinarModel } from "../webinar.model";

@Component({
    templateUrl: 'webinar.component.html',
    styles: [`
        .webinar-1 {
            background: #FF9500;
            border-radius: 10px;
        }
        .webinar-2 {
            background: #AF52DE;
            border-radius: 10px;
        }
    `]
})
export class WebinarComponent implements OnInit {
    private readonly webinarService = inject(WebinarService);

    titles = {
        data: "Ваши автовебинары",
        noData: "Автовебинаров пока нет..."
    };
    description = {
        data: "Запись выглядит как видео в прямом эфире, доступ к которому закрывается после окончания трансляции.",
        noData: "Чтобы создать новый, нажмите на кнопку ниже"
    };
    mode:"noData" | "data" = "noData";
    webinars: WebinarModel[];

    ngOnInit(): void {
        this.webinarService
        .webinars()
        .subscribe(data => {
            this.webinars = data;
            if (data.length > 0) {
                this.mode = "data";
            }
        });
    }
}