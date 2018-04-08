import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VodIndexContainerComponent } from '@vod/containers/vod-index-container/vod-index-container.component';
import { VodShowContainerComponent } from '@vod/containers/vod-show-container/vod-show-container.component';

const routes: Routes = [
  { path: '', component: VodIndexContainerComponent },
  { path: 'vod/:id', component: VodShowContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VodRoutingModule { }
