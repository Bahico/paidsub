import { Component, inject, OnInit } from "@angular/core";
import { TariffModel } from "../../../../tariff/tariff.model";
import { TariffService } from "../../../../tariff/tariff.service";
import { ControlContainer, FormGroup } from "@angular/forms";

@Component({
    selector: 'marketing-create-send-after',
    templateUrl: 'marketing-create-send-after.component.html',
    styleUrl: '../marketing-create.component.scss'
})
export class MarketingCreateSendAfterComponent implements OnInit {
    private readonly tariffService = inject(TariffService)

    tariffs: TariffModel[];
    editForm: FormGroup;

    constructor(private readonly controlContainer: ControlContainer) {}

    ngOnInit(): void {
        this.tariffService.tariff().subscribe(data => (this.tariffs = data));
        this.editForm = <FormGroup>this.controlContainer.control;
    }

    setTariff(id: number) {
        const tariffs = this.editForm.get('tariffs').value
        const index = tariffs.indexOf(id);
        
        
        if (index > -1) {
            tariffs.splice(index, 1)
            this.editForm.patchValue({
                tariffs: [...tariffs]
            })
        } else {
            this.editForm.patchValue({
                tariffs: [...tariffs, id]
            })
        }

        console.log(this.editForm.get('tariffs').value);
        
    }
}