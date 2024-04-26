import { Component, inject, OnInit } from "@angular/core";
import { AbTest } from "./ab-test.model";
import { AbTestService } from "./ab-test.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: 'ab-test.component.html',
    styles: [`
        .big-right {
            height: 40px;
            display: flex;
            align-items: center;
            .right {
                align-items: end;
            }
        }
        .margin-top {
            margin-top: 30px;
        }
    `]
})
export class AbTestComponent implements OnInit {
    private readonly abTestService = inject(AbTestService);
    private readonly router = inject(Router);
    deleteModal = false;

    settings: AbTest;

    ngOnInit(): void {
        this.abTestService
        .settings()
        .subscribe(data => (this.settings = data))
    }

    reset() {
        this.abTestService
        .reset()
        .subscribe(() => {
            this.router.navigate(['/marketing']);
            this.changeDeleteModal();
        })
    }

    changeDeleteModal() {
        this.deleteModal = !this.deleteModal;
    }
}