import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CoreModule } from '@core/core.module';

import { MatchesRoutingModule } from '@matches/matches-routing.module';
import { MatchIndexContainerComponent } from '@matches/containers/match-index-container/match-index-container.component';

@NgModule({
  imports: [
    CommonModule,
    MatchesRoutingModule,
    // StoreModule.forFeature('matches', reducers),
    EffectsModule.forFeature([]),
    CoreModule,
  ],
  declarations: [
    MatchIndexContainerComponent
  ],
  providers: [

  ],
  exports: [
    MatchIndexContainerComponent
  ]
})
export class MatchesModule { }
