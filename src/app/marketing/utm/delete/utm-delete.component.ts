import { Component, inject, Input } from "@angular/core";
import { Router } from "@angular/router";
import { UtmService } from "../utm.service";

@Component({
    selector: 'utm-delete',
    templateUrl: 'utm-delete.component.html'
})
export class UtmDeleteComponent {
    private readonly utmService = inject(UtmService);
    private readonly router = inject(Router);

    @Input({required: true}) id: number;
    openModal = false;
 
    changeDeleteAlert() {
        this.openModal = !this.openModal;
    }

    deleteMailing() {
        this.changeDeleteAlert();
        this.utmService
        .delete(this.id)
        .subscribe(() => {
            this.router.navigate(['/marketing/utm/'])
        })
    }
}