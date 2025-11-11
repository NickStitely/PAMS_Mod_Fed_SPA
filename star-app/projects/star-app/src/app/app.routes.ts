import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'star',
    loadChildren: () => import('./star-report/star-report.module').then(m => m.StarReportModule)
  },
  {
    path: '',
    redirectTo: 'star',
    pathMatch: 'full'
  }
];
