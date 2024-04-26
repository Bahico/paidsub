import { Component, inject } from "@angular/core";
import { UtmService } from "../utm.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    templateUrl: 'utm-create.component.html'
})
export class UtmCreateComponent {
    private readonly utmService = inject(UtmService);
    private readonly router = inject(Router);

    editForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(32)]),
        utm: new FormControl('')
    })

    save() {
        this.utmService
        .create(this.editForm.getRawValue())
        .subscribe(() => {
            this.router.navigate(['/marketing/utm'])
        })
    }
}