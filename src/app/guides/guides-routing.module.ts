import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuidesIndexContainerComponent } from '@guides/containers/guides-index-container/guides-index-container.component';


const routes: Routes = [
  { path: '', component: GuidesIndexContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidesRoutingModule { }
