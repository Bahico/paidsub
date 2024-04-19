import { Component, OnInit } from "@angular/core";
import { ControlContainer, FormGroup } from "@angular/forms";

@Component({
    templateUrl: 'tariff-create-name.component.html',
    styleUrl: '../../tariff-create.component.scss',
    selector: 'tariff-create-name'
})
export class TarifCreateNameComponent implements OnInit {
    editForm: FormGroup;
    maxLength = 32;

    constructor(
        private readonly controlContainer: ControlContainer
    ) {}

    ngOnInit(): void {
        this.editForm = <FormGroup>this.controlContainer.control;
        this.editForm.get('name').valueChanges.subscribe(data => {
            this.maxLength = 32 - data.length
        })
    }
}