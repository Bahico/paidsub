import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MailingsComponent } from "./list/mailings.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: MailingsComponent
            }
        ])
    ]
})
export class MailingsModule {}