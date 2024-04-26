import { Component, OnInit } from "@angular/core";
import { ControlContainer, FormGroup } from "@angular/forms";

@Component({
    selector: 'marketing-create-action',
    templateUrl: 'marketing-create-action.component.html',
    styleUrl: '../marketing-create.component.scss'
})
export class MarketingCreateActionComponent implements OnInit {
    editForm: FormGroup;
    
    constructor(private readonly controlContainer: ControlContainer) {}
    
    ngOnInit(): void {
        this.editForm = <FormGroup>this.controlContainer.control;
    }

    setBroadCast(value: number) {
        this.editForm.patchValue({
            broadcast_kind: value
        })
    }
}