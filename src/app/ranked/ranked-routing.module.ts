import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RankedIndexContainerComponent } from '@ranked/containers/ranked-index-container/ranked-index-container.component';

const routes: Routes = [
  { path: '', component: RankedIndexContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RankedRoutingModule { }
