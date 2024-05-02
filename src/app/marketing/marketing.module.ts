import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MarketingRoute } from "./marketing.route";
import { MenuComponent } from "./menu/menu.component";
import { BasicComponent } from "./edit/basic.component";
import { NameComponent } from "../core/name/name.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MediaComponent } from "../core/media/media.component";

@NgModule({
    declarations: [
        MenuComponent,
        BasicComponent
    ],
    imports: [
        RouterModule.forChild(MarketingRoute),
        NameComponent,
        ReactiveFormsModule,
        MediaComponent
    ]
})
export class MarketingModule {

}