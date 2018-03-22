import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@core/core.module';

import { DashboardRoutingModule } from '@dashboard/dashboard-routing.module';
import { RankingIndexContainerComponent } from '@dashboard/containers/ranking-index-container/ranking-index-container.component';
import { TeamStatsComponent } from '@dashboard/components/team-stats/team-stats.component';
import { TeamTrendsComponent } from '@dashboard/components/team-trends/team-trends.component';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule
  ],
  declarations: [
    RankingIndexContainerComponent,
    TeamStatsComponent,
    TeamTrendsComponent
  ],
  providers: [

  ],
  exports: [
    RankingIndexContainerComponent,
    TeamStatsComponent,
    TeamTrendsComponent
  ]
})
export class DashboardModule { }
