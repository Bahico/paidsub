import { Component, OnInit } from "@angular/core";
import { ControlContainer, FormGroup } from "@angular/forms";
import { TargetAuditory } from "../../mailings.model";

@Component({
    selector: 'marketing-create-send-manual',
    templateUrl: 'marketing-create-send-manual.component.html',
    styleUrl: '../marketing-create.component.scss'
})
export class MarketingCreateSendComponent implements OnInit {
    editForm: FormGroup;
    modalOpen = false;
    time = false;
    target_auditory = TargetAuditory;

    date: string;
    hours: string;
    
    constructor(private readonly controlContainer: ControlContainer) {}
    
    ngOnInit(): void {
        this.editForm = <FormGroup>this.controlContainer.control;
    }

    changeModal(time?: boolean) {
        this.modalOpen = !this.modalOpen;
        if (time !== undefined) {
            this.time = time;
            this.editForm.patchValue({
                broadcast_time: null
            })
        }
    }

    changeDate() {
        if (this.date && this.hours) {
            const date = this.date.split("-").map(item => Number(item));
            const hours = this.hours.split(":").map(item => Number(item));
            
            if (date.length === 3 && hours.length === 2 && String(date[2]).length === 4) {
                this.editForm.patchValue({
                    broadcast_time: new Date(date[2], date[1], date[0], hours[0], hours[1]).getTime()
                })
            }
        }
    }

    changeAuditory(target_auditory: TargetAuditory) {
        this.editForm.get('target_auditory').setValue(target_auditory);
    }
}