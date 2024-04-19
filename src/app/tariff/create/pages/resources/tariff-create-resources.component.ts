import { Component, inject, OnInit } from "@angular/core";
import { ControlContainer, FormGroup } from "@angular/forms";
import { ResourceService } from "../../../../resource/resource.service";
import { ResourceModel } from "../../../../resource/resource.model";

@Component({
    templateUrl: 'tariff-create-resources.component.html',
    styleUrl: '../../tariff-create.component.scss',
    selector: 'tariff-create-resources'
})
export class TariffCreateResourceComponent implements OnInit {
    editForm: FormGroup;
    private readonly resourceService = inject(ResourceService);
    resources: ResourceModel[];
    check = false

    constructor(
        private readonly controlContainer: ControlContainer
    ) {}

    ngOnInit(): void {
        this.editForm = <FormGroup>this.controlContainer.control;
        this.loadResources()
    }

    loadResources() {
        this.resourceService.resources().subscribe(data => {
            this.resources = data;
        })
    }

    setResource(id: number) {
        const index = this.editForm.get('resources').value.indexOf(id);
        
        if (index > -1) {
            this.editForm.patchValue({
                resources: [...this.editForm.get('resources').value.splice(index+1, 1)]
            })
        } else {
            this.editForm.patchValue({
                resources: [...this.editForm.get('resources').value, id]
            })
        }
    }
}