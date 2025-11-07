import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrantsHomeComponent } from './grants-home/grants-home.component';

const routes: Routes = [
  {
    path: '',
    component: GrantsHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrantsHomeRoutingModule { }
