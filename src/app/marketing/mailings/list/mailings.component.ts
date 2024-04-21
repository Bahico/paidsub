import { Component, inject } from "@angular/core";
import { MailingsService } from "../mailings.service";

@Component({
    templateUrl: 'mailings.component.html',
    styleUrl: 'mailings.component.scss'
})
export class MailingsComponent {
    private readonly mailingsService = inject(MailingsService)

    titles = {
        data: "Ваши рассылки",
        noData: "Рассылок пока нет..."
    };
    description = {
        data: "Для изменения настроек вашей рассылки выберите из списка.",
        noData: "Чтобы создать новую, нажмите на кнопку ниже"
    }
    mode = "noData";

    
}