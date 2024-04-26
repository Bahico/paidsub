import { Component, OnInit } from "@angular/core";
import { ControlContainer, FormArray, FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'marketing-create-button',
    templateUrl: 'marketing-create-button.component.html',
    styleUrl: '../marketing-create.component.scss'
})
export class MarketingCreateButtonComponent implements OnInit {
    editForm: FormGroup;
    
    createBtn = new FormGroup({
        text: new FormControl(""),
        url: new FormControl("")
    })

    constructor(private readonly controlContainer: ControlContainer) {}
    
    ngOnInit(): void {
        this.editForm = <FormGroup>this.controlContainer.control;
    }

    addBtn() {
        (<FormArray>this.editForm.get('keyboard_settings')).push(
            new FormGroup({
                text: new FormControl(this.createBtn.controls.text.value),
                url: new FormControl(this.createBtn.controls.url.value)
            })
        );
        
        // console.log(this.editForm.get('keyboard_settings'));
        this.createBtn.reset();
    }

    deleteBtn(index: number) {
        (<FormArray>this.editForm.get('keyboard_settings')).removeAt(index)
    }
}