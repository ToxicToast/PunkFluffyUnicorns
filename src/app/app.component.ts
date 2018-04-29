import { Component } from '@angular/core';
import { Route, ActivatedRoute, Router, ParamMap } from '@angular/router';
import { environment } from '@env/environment';
import { CounterService } from '@core/services/counter.service';


import { Store } from '@ngrx/store';

import * as fromDashboard from '@dashboard/reducers/dashboard.reducer';
import * as dashboard from '@dashboard/actions/dashboard.actions';
//
import * as fromRanked from '@ranked/reducers/ranked.reducer';
import * as ranking from '@ranked/actions/ranking.actions';
//
import * as fromVods from '@vod/reducers/vod.reducer';
import * as videos from '@vod/actions/vod.actions';
//
import * as fromGuides from '@guides/reducers/guides.reducer';
import * as guides from '@guides/actions/guides.actions';
//
import * as fromNews from '@news/reducers/news.reducer';
import * as news from '@news/actions/news.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private maintenance: number = 0;

  constructor(
    private dashboardStore: Store<fromDashboard.State>,
    private rankedStore: Store<fromRanked.State>,
    private vodStore: Store<fromVods.State>,
    private guidesStore: Store<fromGuides.State>,
    private newsStore: Store<fromNews.State>,
    private router: Router,
    private counter: CounterService
  ) {
    // console.log('configured routes: ', this.router.config);
    //
    this.maintenanceRedirect();
    this.dispatchDashboard();
    this.dispatchRanked();
    this.dispatchVod();
    this.dispatchGuides();
    this.dispatchNews();
    this.countVisitors();
  }

  private dispatchDashboard() {
    this.dashboardStore.dispatch(new dashboard.LoadDashboard());
  }

  private dispatchRanked() {
    this.rankedStore.dispatch(new ranking.LoadTeamRanking());
  }

  private dispatchVod() {
    this.vodStore.dispatch(new videos.LoadVideos());
  }

  private dispatchGuides() {
    this.vodStore.dispatch(new guides.LoadGuides());
  }

  private dispatchNews() {
    this.newsStore.dispatch(new news.LoadNews());
  }

  private maintenanceRedirect() {
    const maintenance = environment.maintenance;
    if (maintenance === 1) {
      this.router.navigate(['/maintenance']);
    }
  }

  private countVisitors() {
    this.counter.getData().subscribe(data => {
      this.counter.setVisitor(data).subscribe();
    });
  }

}
