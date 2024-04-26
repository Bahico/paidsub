import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { WebinarComponent } from "./list/webinar.component";
import { WebinarMEssageCreateComponent } from "./create/message/webinar-message-create.component";
import { WebinarContentCreateComponent } from "./create/content/webinar-content-create.component";
import { WebinarAudienceCreateComponent } from "./create/audience/webinar-audience-create.component";
import { WebinarDateCreateComponent } from "./create/date/webinar-date-create.component";
import { WebinarCreateComponent } from "./create/webinar-create.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: WebinarComponent
            },
            {
                path: 'create',
                component: WebinarCreateComponent
            }
        ])
    ],
    declarations: [
        WebinarCreateComponent,
        WebinarComponent,
        WebinarMEssageCreateComponent,
        WebinarContentCreateComponent,
        WebinarAudienceCreateComponent,
        WebinarDateCreateComponent
    ]
})
export class WebinarModule {}