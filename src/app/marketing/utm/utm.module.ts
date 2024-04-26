import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UtmComponent } from "./list/utm.component";
import { UtmCreateComponent } from "./create/utm-create.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UtmDetailComponent } from "./detail/utm-detail.component";
import { UtmStatisticaComponent } from "./detail/utm-statistica.component";
import { CommonModule } from "@angular/common";
import { UtmStatisticaPriceComponent } from "./detail/utm-statistica-price.component";
import { UtmDeleteComponent } from "./delete/utm-delete.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: UtmComponent
            },
            {
                path: 'create',
                component: UtmCreateComponent
            },
            {
                path: 'view/:id',
                component: UtmDetailComponent
            },
            {
                path: 'view-statistica/:id',
                component: UtmStatisticaComponent
            },
            {
                path: 'view-statistica-price/:id',
                component: UtmStatisticaPriceComponent
            }
        ]),
        ReactiveFormsModule,
        FormsModule,
        CommonModule
    ],
    declarations: [
        UtmComponent,
        UtmCreateComponent,
        UtmDetailComponent,
        UtmStatisticaComponent,
        UtmStatisticaPriceComponent,
        UtmDeleteComponent
    ]
})
export class UtmModule {

}