import { Component, OnInit } from "@angular/core";
import { ControlContainer, FormGroup } from "@angular/forms";
import { TargetAuditory } from "../../webinar.model";

@Component({
    selector: 'webinar-audience-create',
    templateUrl: 'webinar-audience-create.component.html'
})
export class WebinarAudienceCreateComponent implements OnInit {
    editForm: FormGroup;
    target_auditory = TargetAuditory;

    constructor(private readonly controlContainer: ControlContainer) {}

    ngOnInit(): void {
        this.editForm = <FormGroup>this.controlContainer.control;
    }

    change(type: TargetAuditory) {
        this.editForm.patchValue({
            target_auditory: type
        })
    }
}