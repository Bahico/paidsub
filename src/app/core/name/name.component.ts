import { Component, Input, OnInit } from "@angular/core";
import { ControlContainer, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
    standalone: true,
    selector: 'name',
    templateUrl: 'name.component.html',
    imports: [ReactiveFormsModule]
})
export class NameComponent implements OnInit {
    @Input({required: true}) placeholder: string;
    @Input() controlName: string;
    @Input() container = true;

    editForm: FormGroup;
    residual = 32;

    constructor(
        private readonly control: ControlContainer
    ) {}

    ngOnInit() {
        this.editForm = <FormGroup>this.control.control;
        this.editForm.get(this.controlName ?? 'name').valueChanges.subscribe(data => {
            this.residual = data ? 32 - data.length : 32;
        })
    }
}