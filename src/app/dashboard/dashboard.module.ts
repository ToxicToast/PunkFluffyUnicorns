import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { reducers } from '@dashboard/reducers/dashboard.reducer';
// import { Dashboard } from '@dashboard/effects';

import { CoreModule } from '@core/core.module';

import { DashboardRoutingModule } from '@dashboard/dashboard-routing.module';

import { DashboardService } from '@dashboard/services/dashboard.service';

import { DashboardIndexContainerComponent } from '@dashboard/containers/dashboard-index-container/dashboard-index-container.component';
import { TeamStatsComponent } from '@dashboard/components/team-stats/team-stats.component';
import { TeamTrendsComponent } from '@dashboard/components/team-trends/team-trends.component';
import { TeamMedalsComponent } from '@dashboard/components/team-medals/team-medals.component';
import { TeamStreamersComponent } from '@dashboard/components/team-streamers/team-streamers.component';
import { TeamKpdComponent } from '@dashboard/components/team-kpd/team-kpd.component';
import { TeamHeroesComponent } from '@dashboard/components/team-heroes/team-heroes.component';


@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    DashboardRoutingModule,
    StoreModule.forFeature('dashboard', reducers),
    EffectsModule.forFeature([]),
    CoreModule
  ],
  declarations: [
    DashboardIndexContainerComponent,
    TeamStatsComponent,
    TeamTrendsComponent,
    TeamMedalsComponent,
    TeamStreamersComponent,
    TeamKpdComponent,
    TeamHeroesComponent
  ],
  providers: [
    DashboardService
  ],
  exports: [
    DashboardIndexContainerComponent,
    TeamStatsComponent,
    TeamTrendsComponent
  ]
})
export class DashboardModule { }
