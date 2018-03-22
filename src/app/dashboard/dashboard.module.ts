import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { reducers } from '@dashboard/reducers/dashboard.reducer';
import { MedalsEffects } from '@dashboard/effects/medals.effects';
import { StatisticsEffects } from '@dashboard/effects/statistics.effects';
import { TrendsEffects } from '@dashboard/effects/trends.effects';
import { StreamersEffects } from '@dashboard/effects/streamers.effects';

import { CoreModule } from '@core/core.module';

import { DashboardRoutingModule } from '@dashboard/dashboard-routing.module';

import { DashboardService } from '@dashboard/services/dashboard.service';

import { RankingIndexContainerComponent } from '@dashboard/containers/ranking-index-container/ranking-index-container.component';
import { TeamStatsComponent } from '@dashboard/components/team-stats/team-stats.component';
import { TeamTrendsComponent } from '@dashboard/components/team-trends/team-trends.component';
import { TeamMedalsComponent } from '@dashboard/components/team-medals/team-medals.component';
import { TeamStreamersComponent } from '@dashboard/components/team-streamers/team-streamers.component';


@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    DashboardRoutingModule,
    StoreModule.forFeature('dashboard', reducers),
    EffectsModule.forFeature([MedalsEffects, StatisticsEffects, TrendsEffects, StreamersEffects]),
    CoreModule
  ],
  declarations: [
    RankingIndexContainerComponent,
    TeamStatsComponent,
    TeamTrendsComponent,
    TeamMedalsComponent,
    TeamStreamersComponent
  ],
  providers: [
    DashboardService
  ],
  exports: [
    RankingIndexContainerComponent,
    TeamStatsComponent,
    TeamTrendsComponent
  ]
})
export class DashboardModule { }
