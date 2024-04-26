import { Component } from "@angular/core";
import { ControlContainer, FormGroup } from "@angular/forms";

@Component({
    selector: 'marketing-create-send-before',
    templateUrl: 'marketing-create-send-before.component.html',
    styleUrl: '../marketing-create.component.scss'
})
export class MarketingCreateSendBeforeComponent {
    editForm: FormGroup;
    hours = "0";
    day: string;

    constructor(private readonly controlContainer: ControlContainer) {}

    ngOnInit(): void {
        this.editForm = <FormGroup>this.controlContainer.control;
    }

    change() {
        this.editForm.patchValue({
            hours: this.day ? Number(this.day) * 24 + Number(this.hours) : this.hours
        })
    }
}