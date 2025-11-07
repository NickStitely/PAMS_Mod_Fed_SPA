import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'grants',
    loadChildren: () => import('./grants/grants.module').then(m => m.GrantsModule)
  },
  {
    path: '',
    redirectTo: 'grants',
    pathMatch: 'full'
  }
];
