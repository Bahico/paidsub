import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MarketingRoute } from "./marketing.route";
import { MenuComponent } from "./menu/menu.component";
import { EditComponent } from "./edit/edit.component";
import { BasicComponent } from "./edit/basic/basic.component";

@NgModule({
    imports: [
        RouterModule.forChild(MarketingRoute)
    ],
    declarations: [
        MenuComponent,
        EditComponent,
        BasicComponent
    ]
})
export class MarketingModule {

}