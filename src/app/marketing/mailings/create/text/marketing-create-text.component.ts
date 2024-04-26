import { Component, OnInit } from "@angular/core";
import { ControlContainer, FormGroup } from "@angular/forms";

@Component({
    selector: 'marketing-create-text',
    templateUrl: 'marketing-create-text.component.html',
    styleUrl: '../marketing-create.component.scss'
})
export class MarketingCreateTextComponent implements OnInit {
    editForm: FormGroup;
    
    constructor(private readonly controlContainer: ControlContainer) {}
    
    ngOnInit(): void {
        this.editForm = <FormGroup>this.controlContainer.control;
    }
}