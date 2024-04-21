import { Routes } from "@angular/router";
import { MenuComponent } from "./menu/menu.component";
import { EditComponent } from "./edit/edit.component";
import { BasicComponent } from "./edit/basic/basic.component";

export const MarketingRoute:Routes = [
    {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
    },
    {
        path: 'menu',
        component: MenuComponent
    },
    {
        path: 'edit',
        component: EditComponent
    },
    {
        path: 'edit-basic',
        component: BasicComponent
    },
    {
        path: 'mailings',
        loadChildren: () => import('./mailings/mailings.module').then(m => m.MailingsModule)
    }
]