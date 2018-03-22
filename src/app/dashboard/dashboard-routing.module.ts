import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardIndexContainerComponent } from '@dashboard/containers/dashboard-index-container/dashboard-index-container.component';

const routes: Routes = [
  { path: '', component: DashboardIndexContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
