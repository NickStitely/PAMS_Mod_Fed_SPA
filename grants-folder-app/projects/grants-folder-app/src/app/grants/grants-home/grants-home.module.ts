import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrantsHomeComponent } from './grants-home/grants-home.component';
import { GrantsHomeRoutingModule } from './grants-home-routing.module';

@NgModule({
  declarations: [
    GrantsHomeComponent
  ],
  imports: [
    CommonModule,
    GrantsHomeRoutingModule
  ],
  exports: [
    GrantsHomeComponent
  ]
})
export class GrantsHomeModule { }
