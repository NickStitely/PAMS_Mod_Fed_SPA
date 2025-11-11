import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrantsMasterComponent } from './grants-master/grants-master.component';

const routes: Routes = [
  {
    path: '',
    component: GrantsMasterComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./grants-home/grants-home.module').then(m => m.GrantsHomeModule)
      },
      {
        path: 'site-visits',
        loadChildren: () => import('./grants-site-visits/grants-site-visits.module').then(m => m.GrantsSiteVisitsModule)
      },
      {
        path: 'register',
        loadChildren: () => import('../register-user/register-user.module').then(m => m.RegisterUserModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrantsRoutingModule { }
