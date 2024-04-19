import { Component, OnInit } from "@angular/core";
import { ControlContainer, FormGroup } from "@angular/forms";

@Component({
    templateUrl: 'tariff-create-recurrent.component.html',
    styleUrl: '../../tariff-create.component.scss',
    selector: 'tariff-create-recurrent'
})
export class TariffCreateRecurrentComponent implements OnInit {
    editForm: FormGroup;

    constructor(
        private readonly controlContainer: ControlContainer
    ) {}

    ngOnInit(): void {
        this.editForm = <FormGroup>this.controlContainer.control;
    }
    
    changeRecurrent(recurrent: boolean) {
        this.editForm.patchValue({
            is_recurrent: recurrent
        })
    }
}