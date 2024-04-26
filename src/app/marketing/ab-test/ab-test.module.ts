import { NgModule } from "@angular/core";
import { AbTestComponent } from "./ab-test.component";
import { RouterModule } from "@angular/router";
import { AbTestEditComponent } from "./ab-test-edit.component";
import { MediaComponent } from "../../core/media/media.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AbTestComponent
            },
            {
                path: 'edit/:type',
                component: AbTestEditComponent
            }
        ]),
        MediaComponent,
        ReactiveFormsModule
    ],
    declarations: [
        AbTestComponent,
        AbTestEditComponent
    ]
})
export class AbTestModule {

}