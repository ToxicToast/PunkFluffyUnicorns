import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RankedIndexContainerComponent } from '@ranked/containers/ranked-index-container/ranked-index-container.component';
// import { RankedShowContainerComponent } from '@ranked/containers/ranked-show-container/ranked-show-container.component';

const routes: Routes = [
  { path: '', component: RankedIndexContainerComponent },
  // { path: 'ranked/:id', component: RankedShowContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RankedRoutingModule { }
