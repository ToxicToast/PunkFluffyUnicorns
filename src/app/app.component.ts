import { Component } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';

import { Store } from '@ngrx/store';

import * as fromDashboard from '@dashboard/reducers/dashboard.reducer';
import * as medals from '@dashboard/actions/medals.actions';
import * as statistics from '@dashboard/actions/statistics.actions';
import * as trends from '@dashboard/actions/trends.actions';
import * as streamers from '@dashboard/actions/streamers.actions';
//
import * as fromRanked from '@ranked/reducers/ranked.reducer';
import * as ranking from '@ranked/actions/ranking.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router,
    private dashboardStore: Store<fromDashboard.State>,
    private rankedStore: Store<fromRanked.State>
  ) {
    // console.log('configured routes: ', this.router.config);
    //
    this.dispatchDashboard();
    this.dispatchRanked();
  }

  private dispatchDashboard() {
    this.dashboardStore.dispatch(new statistics.LoadTeamStatistics());
    this.dashboardStore.dispatch(new medals.LoadTeamMedals());
    this.dashboardStore.dispatch(new trends.LoadTeamTrends());
    this.dashboardStore.dispatch(new streamers.LoadTeamStreamers());
  }

  private dispatchRanked() {
    this.rankedStore.dispatch(new ranking.LoadTeamRanking());
  }

}
