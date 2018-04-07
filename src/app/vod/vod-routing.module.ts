import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VodIndexContainerComponent } from '@vod/containers/vod-index-container/vod-index-container.component';

const routes: Routes = [
  { path: '', component: VodIndexContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VodRoutingModule { }
