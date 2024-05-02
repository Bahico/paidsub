import { Component, inject } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { getEndpointFor } from "../../core/endpoint";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
    templateUrl: 'basic.component.html'
})
export class BasicComponent {
    private readonly resourceUrl = getEndpointFor('marketing/botCustomization')
    private readonly http = inject(HttpClient);
    private readonly router = inject(Router);

    editForm = new FormGroup({
        name: new FormControl(null),
        description: new FormControl(null),
        welcome_message: new FormGroup({
            message: new FormControl(null),
            attachment: new FormControl([])
        })
    });

    save() {
        this.http
        .put(this.resourceUrl, this.editForm.getRawValue())
        .subscribe(() => {
            this.router.navigate(['../'])
        })
    }
}