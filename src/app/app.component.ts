import { Component } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';

import { Store } from '@ngrx/store';

import * as fromDashboard from '@dashboard/reducers/dashboard.reducer';
import * as medals from '@dashboard/actions/medals.actions';
import * as statistics from '@dashboard/actions/statistics.actions';
import * as trends from '@dashboard/actions/trends.actions';
import * as streamers from '@dashboard/actions/streamers.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router,
    private store: Store<fromDashboard.State>
  ) {
    console.log('configured routes: ', this.router.config);
    //
    this.dispatchDashboard();
  }

  private dispatchDashboard() {
    this.store.dispatch(new statistics.LoadTeamStatistics());
    this.store.dispatch(new medals.LoadTeamMedals());
    this.store.dispatch(new trends.LoadTeamTrends());
    this.store.dispatch(new streamers.LoadTeamStreamers());
  }

}
