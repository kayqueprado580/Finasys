import { NgModule } from '@angular/core';

import { SharedModule } from "../../shared/shared.module";

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports/reports.component';

import { ChartModule } from "primeng/chart";
@NgModule({
  declarations: [ReportsComponent],
  imports: [
    ReportsRoutingModule,
    SharedModule,
    ChartModule
  ]
})
export class ReportsModule { }
