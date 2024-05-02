import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { WebinarComponent } from "./list/webinar.component";
import { WebinarMEssageCreateComponent } from "./create/message/webinar-message-create.component";
import { WebinarContentCreateComponent } from "./create/content/webinar-content-create.component";
import { WebinarAudienceCreateComponent } from "./create/audience/webinar-audience-create.component";
import { WebinarDateCreateComponent } from "./create/date/webinar-date-create.component";
import { WebinarCreateComponent } from "./create/webinar-create.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxMaskDirective } from "ngx-mask";
import { WebinarDetailComponent } from "./detail/webinar-detail.component";
import { WebinarGeneralSettingsComponent } from "./settings/webinar-general-settings.component";
import { WebinarDataSettingsComponent } from "./settings/webinar-data-settings.component";
import { NameComponent } from "../../core/name/name.component";
import { WebinarDatePipe } from "./list/webinar.pipe";

@NgModule({
    declarations: [
        WebinarCreateComponent,
        WebinarComponent,
        WebinarMEssageCreateComponent,
        WebinarContentCreateComponent,
        WebinarAudienceCreateComponent,
        WebinarDateCreateComponent,
        WebinarDetailComponent,
        WebinarGeneralSettingsComponent,
        WebinarDataSettingsComponent,
        WebinarDatePipe
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: WebinarComponent
            },
            {
                path: 'create',
                component: WebinarCreateComponent
            },
            {
                path: 'view/:id',
                component: WebinarDetailComponent
            },
            {
                path: 'settings-general/:id',
                component: WebinarGeneralSettingsComponent
            },
            {
                path: 'settings-date/:id',
                component: WebinarDataSettingsComponent
            }
        ]),
        ReactiveFormsModule,
        NgxMaskDirective,
        FormsModule,
        NameComponent
    ]
})
export class WebinarModule {}