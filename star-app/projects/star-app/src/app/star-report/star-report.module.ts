import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarReportComponent } from './star-report.component';
import { StarReportRoutingModule } from './star-report-routing.module';
import { MyLibModule } from '@NickStitely/my-lib';

@NgModule({
  declarations: [
    StarReportComponent
  ],
  imports: [
    CommonModule,
    StarReportRoutingModule,
    MyLibModule
  ],
  exports: [
    StarReportComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class StarReportModule { }
