import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import { DashboardRoutingModule } from '@dashboard/dashboard-routing.module';

import { RankingIndexContainerComponent } from '@dashboard/containers/ranking-index-container/ranking-index-container.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  declarations: [
    RankingIndexContainerComponent
  ],
  providers: [

  ],
  exports: [
    RankingIndexContainerComponent,
    MatButtonModule,
    MatCheckboxModule
  ]
})
export class DashboardModule { }
