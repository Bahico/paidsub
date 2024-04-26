import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'marketing',
        pathMatch: 'full'
    },
    {
        path: 'tariffs',
        loadChildren: () => import('./tariff/tariff.module').then(m => m.TariffModule)
    },
    {
        path: 'marketing',
        loadChildren: () => import('./marketing/marketing.module').then(m => m.MarketingModule)
    }
];
