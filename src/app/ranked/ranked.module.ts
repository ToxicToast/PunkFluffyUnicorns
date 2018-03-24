import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { reducers } from '@ranked/reducers/ranked.reducer';
import { RankingEffects } from '@ranked/effects/ranking.effects';

import { CoreModule } from '@core/core.module';

import { RankingService } from '@ranked/services/ranking.service';


import { RankedRoutingModule } from '@ranked/ranked-routing.module';
import { RankedIndexContainerComponent } from '@ranked/containers/ranked-index-container/ranked-index-container.component';
import { RankingListComponent } from './Components/ranking-list/ranking-list.component';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    RankedRoutingModule,
    StoreModule.forFeature('ranked', reducers),
    // EffectsModule.forFeature([RankingEffects]),
    CoreModule
  ],
  declarations: [
    RankedIndexContainerComponent,
    RankingListComponent
  ],
  exports: [
    RankedIndexContainerComponent
  ],
  providers: [
    RankingService
  ]
})
export class RankedModule { }
