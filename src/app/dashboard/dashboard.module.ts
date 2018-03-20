import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from '@dashboard/dashboard-routing.module';

import { RankingIndexContainerComponent } from '@dashboard/containers/ranking-index-container/ranking-index-container.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    RankingIndexContainerComponent
  ],
  providers: [

  ],
  exports: [
    RankingIndexContainerComponent
  ]
})
export class DashboardModule { }
