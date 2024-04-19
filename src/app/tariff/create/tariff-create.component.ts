import { Component, inject, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { TariffService } from "../tariff.service";
import { Router } from "@angular/router";

enum Step { 
    "name",
    "type",
    "price-date",
    "resources" 
}

@Component({
    templateUrl: 'tariff-create.component.html',
    styleUrl: 'tariff-create.component.scss'
})
export class TariffCreateComponent {
    titles = {
        0: "Введите название и описание тарифа",
        1: "Введите название и описание",
        2: "Укажите цену и продолжительность",
        3: 'Подключите ресурсы'
    }
    step: Step = 0;

    editForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(32)]),
        price: new FormArray([
            new FormGroup({
                currency: new FormControl("RUB", ),
                amount: new FormControl(null)
            }),
            new FormGroup({
                currency: new FormControl("USD"),
                amount: new FormControl(null)
            })
        ]),
        is_recurrent: new FormControl(false),
        resources: new FormControl([])
    })

    private readonly tariffService = inject(TariffService);
    private readonly router = inject(Router)

    next() {
        this.nextFuncs[this.step]()
    }

    nextFuncs = {
        0: () => {
            if (this.editForm.controls.name.valid) {
                this.step += 1;
            }
        },
        1: () => {
            ++this.step;
        },
        2: () => {
            ++this.step;
        },
        3: () => {
            this.tariffService
            .create(this.editForm.getRawValue())
            .subscribe(data => {
                this.router.navigate(['/tariffs'])
            })
        }
    }
}