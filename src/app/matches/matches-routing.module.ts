import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchIndexContainerComponent } from '@matches/containers/match-index-container/match-index-container.component';


const routes: Routes = [
  { path: '', component: MatchIndexContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchesRoutingModule { }
