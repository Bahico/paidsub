import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MailingsComponent } from "./list/mailings.component";
import { MarketingCreateComponent } from "./create/marketing-create.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MarketingCreateSendComponent } from "./create/send-manual/marketing-create-send-manual.component";
import { MarketingCreateButtonComponent } from "./create/button/marketing-create-button.component";
import { MarketingCreateActionComponent } from "./create/action/marketing-create-action.component";
import { MarketingCreateTextComponent } from "./create/text/marketing-create-text.component";
import { MarketingCreateSendAfterComponent } from "./create/send-after/marketing-create-send-after.component";
import { MarketingCreateSendBeforeComponent } from "./create/send-before/marketing-create-send-before.component";
import { CommonModule } from "@angular/common";
import { MailingsDetailStatisticComponent } from "./detail/statistic/mailings-detail-statistic.component";
import { BeforeDetailComponent } from "./detail/before/before-detail.component";
import { BeforeDetailSettingComponent } from "./detail/before/before-detail-setting.component";
import { AfterDetailComponent } from "./detail/after/after-detail.component";
import { AfterDetailSettingComponent } from "./detail/after/after-detial-setting.component";
import { MailingDeleteComponent } from "./delete/mailing-delete.component";


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: MailingsComponent
            },
            {
                path: 'create',
                component: MarketingCreateComponent
            },
            {
                path: 'view-before/:id',
                component: BeforeDetailComponent
            },
            {
                path: 'view-before-setting/:id',
                component: BeforeDetailSettingComponent
            },
            {
                path: 'view-after/:id',
                component: AfterDetailComponent
            },
            {
                path: 'view-after-setting/:id',
                component: AfterDetailSettingComponent
            },
            {
                path: "statistic/:id",
                component: MailingsDetailStatisticComponent
            }
        ]),
        ReactiveFormsModule,
        FormsModule,
        CommonModule
    ],
    declarations: [
        MarketingCreateComponent,
        MailingsComponent,
        MarketingCreateSendComponent,
        MarketingCreateButtonComponent,
        MarketingCreateActionComponent,
        MarketingCreateTextComponent,
        MarketingCreateSendAfterComponent,
        MarketingCreateSendBeforeComponent,
        BeforeDetailSettingComponent,
        BeforeDetailComponent,
        AfterDetailSettingComponent,
        AfterDetailComponent,
        MailingDeleteComponent
    ]
})
export class MailingsModule {}