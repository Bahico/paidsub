import { Component, inject, Input } from "@angular/core";
import { MailingsService } from "../mailings.service";
import { Router } from "@angular/router";

@Component({
    selector: 'mailing-delete',
    templateUrl: 'mailing-delete.component.html',
    styleUrl: 'mailing-delete.component.scss'
})
export class MailingDeleteComponent {
    private readonly mailingsService = inject(MailingsService);
    private readonly router = inject(Router);

    @Input({required: true}) id: number;
    openModal = false;

    changeDeleteAlert() {
        this.openModal = !this.openModal;
    }

    deleteMailing() {
        this.changeDeleteAlert();
        this.mailingsService
        .delete(this.id)
        .subscribe(() => {
            this.router.navigate(['/marketing/mailings/'])
        })
    }
}