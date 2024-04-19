import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'tariffs',
        pathMatch: 'full'
    },
    {
        path: 'tariffs',
        loadChildren: () => import('./tariff/tariff.module').then(m => m.TariffModule)
    }
];
