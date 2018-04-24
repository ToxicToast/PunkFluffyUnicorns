import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchesRoutingModule } from '@matches/matches-routing.module';
import { MatchIndexContainerComponent } from '@matches/containers/match-index-container/match-index-container.component';

@NgModule({
  imports: [
    CommonModule,
    MatchesRoutingModule
  ],
  declarations: [
    MatchIndexContainerComponent
  ]
})
export class MatchesModule { }
