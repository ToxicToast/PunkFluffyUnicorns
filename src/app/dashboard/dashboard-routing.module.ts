import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RankingIndexContainerComponent } from '@dashboard/containers/ranking-index-container/ranking-index-container.component';

const routes: Routes = [
  { path: '', component: RankingIndexContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
