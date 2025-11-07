import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrantsSiteVisitsComponent } from './grants-site-visits/grants-site-visits.component';
import { GrantsSiteVisitsRoutingModule } from './grants-site-visits-routing.module';

@NgModule({
  declarations: [
    GrantsSiteVisitsComponent
  ],
  imports: [
    CommonModule,
    GrantsSiteVisitsRoutingModule
  ],
  exports: [
    GrantsSiteVisitsComponent
  ]
})
export class GrantsSiteVisitsModule { }
