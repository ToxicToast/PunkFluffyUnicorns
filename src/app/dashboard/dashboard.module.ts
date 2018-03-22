import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from '@dashboard/dashboard-routing.module';
import { RankingIndexContainerComponent } from '@dashboard/containers/ranking-index-container/ranking-index-container.component';

import { CoreModule } from '@core/core.module';
import { TeamStatsComponent } from '@dashboard/components/team-stats/team-stats.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule
  ],
  declarations: [
    RankingIndexContainerComponent,
    TeamStatsComponent
  ],
  providers: [

  ],
  exports: [
    RankingIndexContainerComponent,
    TeamStatsComponent
  ]
})
export class DashboardModule { }
