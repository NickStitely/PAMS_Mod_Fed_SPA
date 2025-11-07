import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrantsSiteVisitsComponent } from './grants-site-visits/grants-site-visits.component';

const routes: Routes = [
  {
    path: '',
    component: GrantsSiteVisitsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrantsSiteVisitsRoutingModule { }
