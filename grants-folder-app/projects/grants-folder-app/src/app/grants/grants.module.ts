import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GrantsRoutingModule } from './grants-routing.module';
import { GrantsHomeModule } from './grants-home/grants-home.module';
import { GrantsSiteVisitsModule } from './grants-site-visits/grants-site-visits.module';
import { GrantsMasterComponent } from './grants-master/grants-master.component';
import { RegisterUserModule } from '../register-user/register-user.module';

@NgModule({
  declarations: [
    GrantsMasterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GrantsRoutingModule,
    GrantsHomeModule,
    GrantsSiteVisitsModule,
    RegisterUserModule
  ],
  exports: [
  ]
})
export class GrantsModule { }
