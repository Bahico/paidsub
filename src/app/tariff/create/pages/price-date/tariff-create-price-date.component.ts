import { Component, OnInit } from "@angular/core";
import { ControlContainer, FormGroup } from "@angular/forms";

@Component({
    templateUrl: 'tariff-create-price-date.component.html',
    styleUrl: '../../tariff-create.component.scss',
    selector: 'tariff-create-price-date'
})
export class TariffCreatePriceDateComponent implements OnInit {
    editForm?: FormGroup;
    dayOpen = false;

    constructor(
        private readonly controlContainer: ControlContainer
    ) {}

    ngOnInit(): void {
        this.editForm = <FormGroup>this.controlContainer.control;
    }

    changeDay() {
        this.dayOpen = !this.dayOpen
    }
}