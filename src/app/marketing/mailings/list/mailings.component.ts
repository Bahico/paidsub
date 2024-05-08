import { Component, inject, OnInit } from "@angular/core";
import { MailingsService } from "../mailings.service";
import { BroadcastKind, MailingsModel } from "../mailings.model";
import { Telegram } from '@twa-dev/types';
import {Location} from '@angular/common';

declare global {
    interface Window {
      Telegram: Telegram;
    }
  }


@Component({
    templateUrl: 'mailings.component.html',
    styleUrl: 'mailings.component.scss'
})
export class MailingsComponent implements OnInit {
    private readonly mailingsService = inject(MailingsService);
    private _location = inject(Location);
    
    mailings: MailingsModel[];
    broadcastKind = BroadcastKind;

    titles = {
        data: "Ваши рассылки",
        noData: "Рассылок пока нет..."
    };
    description = {
        data: "Для изменения настроек вашей рассылки выберите из списка.",
        noData: "Чтобы создать новую, нажмите на кнопку ниже"
    }
    mode = "noData";

    ngOnInit(): void {
        this.mailingsService.mailings().subscribe(data => {
            this.mailings = data;
        });

        window?.Telegram?.WebApp?.BackButton.show();
        window?.Telegram?.WebApp?.onEvent('backButtonClicked', () => {
            this._location.back()
        })
    }
}