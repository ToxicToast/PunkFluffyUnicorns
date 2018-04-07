import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceComponent } from '@core/components/maintenance/maintenance.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: '@dashboard/dashboard.module#DashboardModule', pathMatch: 'full' },
  { path: 'ranked', loadChildren: '@ranked/ranked.module#RankedModule', pathMatch: 'full' },
  { path: 'vod', loadChildren: '@vod/vod.module#VodModule', pathMatch: 'full' },
  { path: 'maintenance', component: MaintenanceComponent, pathMatch: 'full' }
];

const options = {
  useHash: true,
  enableTracing: false
};

@NgModule({
  imports: [RouterModule.forRoot(routes, options)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
