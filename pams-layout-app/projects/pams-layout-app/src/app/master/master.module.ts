import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { MasterComponent } from './master/master.component';

@NgModule({
  declarations: [
    MasterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule
  ],
  exports: [
    MasterComponent
  ]
})
export class MasterModule { }
