import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuidesIndexContainerComponent } from '@guides/containers/guides-index-container/guides-index-container.component';
import { GuidesShowContainerComponent } from '@guides/containers/guides-show-container/guides-show-container.component';


const routes: Routes = [
  { path: '', component: GuidesIndexContainerComponent },
  { path: 'guides/:id', component: GuidesShowContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidesRoutingModule { }
