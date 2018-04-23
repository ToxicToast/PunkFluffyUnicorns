import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceComponent } from '@core/components/maintenance/maintenance.component';
import { ChangelogComponent } from '@core/components/changelog/changelog.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: '@dashboard/dashboard.module#DashboardModule', pathMatch: 'full' },
  { path: 'ranked', loadChildren: '@ranked/ranked.module#RankedModule', pathMatch: 'full' },
  { path: 'vod', loadChildren: '@vod/vod.module#VodModule', pathMatch: 'full' },
  { path: 'guides', loadChildren: '@guides/guides.module#GuidesModule', pathMatch: 'full' },
  { path: 'news', loadChildren: '@news/news.module#NewsModule', pathMatch: 'full' },
  { path: 'matches', loadChildren: '@matches/matches.module#MatchesModule', pathMatch: 'full' },
  { path: 'changelog', component: ChangelogComponent, pathMatch: 'full' },
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
