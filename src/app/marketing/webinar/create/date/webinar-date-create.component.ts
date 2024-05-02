import { Component, OnInit } from "@angular/core";
import { ControlContainer, FormGroup } from "@angular/forms";

@Component({
    selector: 'webinar-date-create',
    templateUrl: 'webinar-date-create.component.html',
    styleUrl: 'webinar-date.scss'
})
export class WebinarDateCreateComponent implements OnInit {
    editForm: FormGroup;
    typeModal = false;
    type = 0;
    hours: string;
    numberDay: string;
    year: string;

    constructor(private readonly controlContainer: ControlContainer) {}

    ngOnInit(): void {
        this.editForm = <FormGroup>this.controlContainer.control;
        console.log(this.editForm);
        
    }

    changeType(type: number) {
        this.changeTypeModal();
        this.type = type;
        if (type > 0) {
            this.editForm.patchValue({
                broadcast_type: 1,
                broadcast_settings: {
                    type: 1,
                    broadcast_every: type === 1 ? "week" : "month"
                }
            })
        } else {
            this.editForm.patchValue({
                broadcast_type: 0,
                broadcast_settings: {
                    type: 0
                }
            })
        }
       
    }

    changeTypeModal() {
        this.typeModal = !this.typeModal;
    }

    changeHour() {
        if (this.hours.length === 5) {
            this.editForm.patchValue({
                broadcast_settings: {
                    time: {
                        hours: this.hours.split(":")[0],
                        minuts: this.hours.split(":")[1]
                    }
                }
            })
        }
    }

    changeNumber() {
        this.editForm.patchValue({
            broadcast_settings: {
                everyDays: [this.numberDay]
            }
        })
    }

    changeWeek(numberWeek: number) {
        const settings = this.editForm.get('broadcast_settings');
        const index = settings.get('everyDays').value.indexOf(numberWeek);
        const days = settings.get('everyDays').value;

        if (index > -1) {
            days.splice(index, 1);
            settings.patchValue({
                everyDays: days
            })
        } else {
            settings.patchValue({
                everyDays: [...days, numberWeek]
            })
        }
    }

    changeYear() {
        if (this.year.length === 10) {
            const year = this.year.replace("-", "/").replace("-", "/");            
            this.editForm.patchValue({
                broadcast_date: new Date(year).getTime()
            })
        } else {
            this.editForm.patchValue({
                broadcast_date: null
            })            
        }
    }
}