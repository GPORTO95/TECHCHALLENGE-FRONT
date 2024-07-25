import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'contatos'
    },
    {
        path: 'contatos',
        loadChildren: () => import('./contatos/contatos.routes').then(r => r.CONTATO_ROUTES)
    }
];
