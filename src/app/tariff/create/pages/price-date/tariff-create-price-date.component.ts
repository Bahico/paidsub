import { Component, OnInit } from "@angular/core";
import { ControlContainer, FormGroup } from "@angular/forms";

@Component({
    templateUrl: 'tariff-create-price-date.component.html',
    styleUrl: '../../tariff-create.component.scss',
    selector: 'tariff-create-price-date'
})
export class TariffCreatePriceDateComponent implements OnInit {
    editForm: any;
    dayOpen = false;

    constructor(
        private readonly controlContainer: ControlContainer
    ) {}

    ngOnInit(): void {
        this.editForm = <FormGroup>this.controlContainer.control;
    }

    changeDay(day: number) {
        this.editForm.get('trial').setValue(day);
    }

    changeDayModal() {        
        this.dayOpen = !this.dayOpen;
        console.log(this.dayOpen);
    }
}