import { Component, inject } from "@angular/core";
import { UtmModel } from "../utm.model";
import { UtmService } from "../utm.service";

@Component({
    templateUrl: 'utm.component.html',
    styleUrl: 'utm.component.scss'
})
export class UtmComponent {
    private readonly utmService = inject(UtmService);

    utms: UtmModel[];
    titles = {
        data: "Ваши UTM-метки",
        noData: "UTM-меток пока нету.."
    };
    description = {
        data: "UTM-метки это теги, которые вписываются в ссылку. Они позволяют получить в аналитике подробную информацию о каждом источнике трафика.",
        noData: "Чтобы создать новую, нажмите на кнопку ниже"
    };
    mode:"noData" | "data" = "noData"

    ngOnInit() {
        this.utmService.utms().subscribe(data => {
            this.utms = data;
            if (data.length > 0) {
                this.mode = "data";
            }
        });
    }
}