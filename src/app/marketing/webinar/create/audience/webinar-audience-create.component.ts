import { Component, OnInit } from "@angular/core";
import { ControlContainer, FormGroup } from "@angular/forms";

@Component({
    templateUrl: 'webinar-audience-create.component.html'
})
export class WebinarAudienceCreateComponent implements OnInit {
    editForm: FormGroup;

    constructor(private readonly controlContainer: ControlContainer) {}

    ngOnInit(): void {
        this.editForm = <FormGroup>this.controlContainer.control;
    }
}