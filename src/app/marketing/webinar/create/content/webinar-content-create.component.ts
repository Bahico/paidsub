import { Component, OnInit } from "@angular/core";
import { ControlContainer, FormGroup } from "@angular/forms";

@Component({
    templateUrl: 'webinar-content-create.component.html'
})
export class WebinarContentCreateComponent implements OnInit {
    editForm: FormGroup;

    constructor(private readonly controlContainer: ControlContainer) {}

    ngOnInit(): void {
        this.editForm = <FormGroup>this.controlContainer.control;
    }
}