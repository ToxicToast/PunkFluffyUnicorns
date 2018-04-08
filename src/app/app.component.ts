import { Component } from '@angular/core';
import { Route, ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Store } from '@ngrx/store';

import * as fromDashboard from '@dashboard/reducers/dashboard.reducer';
import * as dashboard from '@dashboard/actions/dashboard.actions';
//
import * as fromRanked from '@ranked/reducers/ranked.reducer';
import * as ranking from '@ranked/actions/ranking.actions';
//
import * as fromVods from '@vod/reducers/vod.reducer';
import * as videos from '@vod/actions/vod.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private dashboardStore: Store<fromDashboard.State>,
    private rankedStore: Store<fromRanked.State>,
    private vodStore: Store<fromVods.State>
  ) {
    // console.log('configured routes: ', this.router.config);
    //
    this.dispatchDashboard();
    this.dispatchRanked();
    this.dispatchVod();
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

}
