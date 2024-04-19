import { Component, inject, OnInit } from "@angular/core";
import { TariffModel } from "../tariff.model";
import { TariffService } from "../tariff.service";

type Mode = "noData" | "data" | "edit"

@Component({
    templateUrl: 'tariff.component.html',
    styleUrl: 'tariff.component.scss'
})
export class TariffComponent implements OnInit {
    titles = {
        noData: "Тарифов пока нет...",
        data: "Ваши тарифы",
        edit: "Изменить порядок"
    }
    paragraph = {
        noData: "Чтобы создать новый, нажмите на кнопку ниже",
        data: "Для изменения настроек вашего тарифа выберите тариф из списка.",
        edit: "Разместите тарифы в нужном порядке. Так они будут отображаться у пользователей"
    }
    mode: Mode = "noData";
    tariffs: TariffModel[] = [];

    private readonly tariffSerivce = inject(TariffService);

    ngOnInit(): void {
        this.tariffSerivce
        .tariff()
        .subscribe(data => {
            this.tariffs = data;
            if (data.length !== 0) {
                this.mode = "data";
            }
            console.log(this.tariffs);
            
        })
    }

    drop(ev: any) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        if (ev.target.id) {
            const dataOne = {...this.tariffs[ev.target.id]};
            const dataTwo = {...this.tariffs[data]};
            
            (this.tariffs[ev.target.id] = this.tariffs[data]).display_position = dataOne.display_position;
            (this.tariffs[data] = dataOne).display_position = dataTwo.display_position;
        }
    }

    drag(ev: any) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    allowDrop(ev: any) {
        ev.preventDefault();
    }

    edit() {
        this.mode = "edit";
    }

    savePosition() {
        this.mode = 'data';
        console.log(this.tariffs);
        
    }
}