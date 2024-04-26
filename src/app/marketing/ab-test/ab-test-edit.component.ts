import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AbTestService } from "./ab-test.service";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    templateUrl: 'ab-test-edit.component.html'
})
export class AbTestEditComponent {
    type: "a" | "b";

    editForm = new FormGroup({
        message: new FormControl(null), 
        attachment: new FormControl(null)
    });

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly abTestService: AbTestService,
        private readonly router: Router
    ) {}

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            this.type = params['type']; // Access the 'id' parameter from the URL
          });
    }

    save() {
        this.abTestService
        .edit(this.type, this.editForm.getRawValue())
        .subscribe(() => {
            this.router.navigate(['../../']);
        })
    }
}