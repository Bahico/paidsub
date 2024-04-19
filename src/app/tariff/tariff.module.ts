import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TariffComponent } from "./list/tariff.component";
import { TarifCreateNameComponent } from "./create/pages/name/tariff-create-name.component";
import { TariffCreateComponent } from "./create/tariff-create.component";
import { TariffCreatePriceDateComponent } from "./create/pages/price-date/tariff-create-price-date.component";
import { TariffCreateResourceComponent } from "./create/pages/resources/tariff-create-resources.component";
import { TariffCreateRecurrentComponent } from "./create/pages/recurrent/tariff-create-recurrent.component";
import { ReactiveFormsModule } from "@angular/forms";
import { TariffDetailComponent } from "./detail/tariff-detail.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: TariffComponent
            },
            {
                path: 'create',
                component: TariffCreateComponent
            },
            {
                path: 'view/:id',
                component: TariffDetailComponent
            }
        ]),
        ReactiveFormsModule
    ],
    declarations: [
        TariffComponent,
        TarifCreateNameComponent,
        TariffCreateComponent,
        TariffCreatePriceDateComponent,
        TariffCreateResourceComponent,
        TariffCreateRecurrentComponent,
        TariffDetailComponent
    ]
})
export class TariffModule {

}