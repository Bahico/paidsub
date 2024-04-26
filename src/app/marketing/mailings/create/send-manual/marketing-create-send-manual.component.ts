import { Component, OnInit } from "@angular/core";
import { ControlContainer, FormGroup } from "@angular/forms";

@Component({
    selector: 'marketing-create-send-manual',
    templateUrl: 'marketing-create-send-manual.component.html',
    styleUrl: '../marketing-create.component.scss'
})
export class MarketingCreateSendComponent implements OnInit {
    editForm: FormGroup;
    modalOpen = false;
    time = false;

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
        }
    }

    changeDate() {
        if (this.date && this.hours) {
            const date = this.date.split("-").map(item => Number(item));
            const hours = this.hours.split(":").map(item => Number(item));
            
            if (date.length === 3 && hours.length === 2) {
                console.log(new Date(date[2], date[1], date[0], hours[0], hours[1]))
            }
            // console.log(new Date(this.date + " " + this.hours));
            
            // this.editForm.patchValue({
            //     time: new Date(this.date + " " + this.hours)
            // })
        }
    }
}