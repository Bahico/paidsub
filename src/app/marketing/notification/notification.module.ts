import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NotificationComponent } from "./list/notification.component";
import { DatePipe } from "./notification-date.pipe";
import { ReactiveFormsModule } from "@angular/forms";
import { NotificationCreateComponent } from "./create/notification-create.component";
import { NameComponent } from "../../core/name/name.component";
import { MediaComponent } from "../../core/media/media.component";

@NgModule({
    declarations: [
        NotificationComponent,
        DatePipe,
        NotificationCreateComponent
    ],
    imports: [
        RouterModule.forChild([
            {
                path: ':webinar-id',
                component: NotificationComponent
            },
            {
                path: ':webinar-id/create',
                component: NotificationCreateComponent
            },
            {
                path: ':webinar-id/update/:id',
                component: NotificationCreateComponent
            }
        ]),
        ReactiveFormsModule,
        NameComponent,
        MediaComponent
    ]
})
export class NotificationModule {}