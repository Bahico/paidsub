import { Component, inject } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { BroadcastKind } from "../mailings.model";
import { MailingsService } from "../mailings.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

enum ManualStep {
    text = "text",
    button = "button",
    send_manual = "send_manual"
}

enum BeforeStep {
    text = "text",
    send_before = "send_before"
}

enum AfterStep {
    text = "text",
    send_after = "send_after"  
}

@Component({
    templateUrl: 'marketing-create.component.html',
    styleUrl: 'marketing-create.component.scss'
})
export class MarketingCreateComponent {
    private readonly mailingsService = inject(MailingsService);
    private readonly router = inject(Router);

    readonly editForm = new FormGroup({
        id: new FormControl(null),
        broadcast_kind: new FormControl(null),
        broadcast_time: new FormControl(null),
        message: new FormControl(null),
        attachment: new FormControl(null),
        keyboard_settings: new FormArray([]),
        time: new FormControl(null),
        hours: new FormControl(null),
        tariffs: new FormControl([])
    });
    broadcastKind = BroadcastKind;
    titles = {
        "action": "Выберите тип рассылки",
        "text": "Текст и медиа рассылки",
        "button": "Добавить кнопки",
        "send_manual": "Отправка расслыки",
        "send_afte": "Отправка расслыки",
        "send_before": "Отправка расслыки"
    };
    manual_step = ManualStep;
    before_step = BeforeStep;
    after_step = AfterStep;
    mode: ManualStep | AfterStep | BeforeStep | "action" = "action";

    next() {
        switch (this.mode) {
            case "action":
                this.mode = this.manual_step.text;
                break;
            case "text":
                if (<any>this.editForm.controls.broadcast_kind === this.broadcastKind.buy_after) {
                    this.mode = this.after_step.send_after;
                } else if (<any>this.editForm.controls.broadcast_kind === this.broadcastKind.buy_before) {
                    this.mode = this.before_step.send_before;
                } else {
                    this.mode = this.manual_step.button;
                };
                break;
            case this.manual_step.button:
                this.mode = ManualStep.send_manual;
                break;
            case this.manual_step.send_manual:
                this.saveManual();
                break;
            case this.before_step.send_before:
                this.saveBefore();
                break;
            case this.after_step.send_after:
                this.saveAfter();
                break;
        }
    }

    saveManual() {
        this.successResponse(this.mailingsService
        .createManual(this.editForm.getRawValue()))
    }

    saveBefore() {
        this.successResponse(this.mailingsService
            .createBefore(this.editForm.getRawValue()))
    }

    saveAfter() {
        this.successResponse(this.mailingsService
            .createAfter(this.editForm.getRawValue()))
    }

    successResponse(source: Observable<any>) {
        source.subscribe(() => {
            this.router.navigate(['/']);
        })
    }

    get step():number {
        switch (this.mode) {
            case "action": 
                return 0;
            case "text":
                return 1;
            case "button":
                return 2;
            case "send_manual":
                return 3;
            case "send_after":
                return 2;
            case "send_before":
                return 2;
            default:
                return 0;
        }
    }
}