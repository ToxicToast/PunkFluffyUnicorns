import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import * as fromDashboard from '@dashboard/reducers/dashboard.reducer';
import * as medals from '@dashboard/actions/medals.actions';
import * as statistics from '@dashboard/actions/statistics.actions';
import * as trends from '@dashboard/actions/trends.actions';
import * as streamers from '@dashboard/actions/streamers.actions';

/*import { Profiles } from '@dashboard/models/profiles';
import { Statistics } from '@dashboard/models/statistics';
import { Medals } from '@dashboard/models/medals';*/

@Component({
  selector: 'app-dashboard-index-container',
  templateUrl: './dashboard-index-container.component.html',
  styleUrls: ['./dashboard-index-container.component.scss']
})
export class DashboardIndexContainerComponent implements OnInit {

  stats$: Observable<any>;
  medals$: Observable<any>;
  trends$: Observable<any>;
  streamers$: Observable<any>;

  constructor(
    private store: Store<fromDashboard.State>
  ) {
    this.medals$ = this.store.select(fromDashboard.getMedalsState);
    this.stats$ = this.store.select(fromDashboard.getStatisticsState);
    this.trends$ = this.store.select(fromDashboard.getTrendsState);
    this.streamers$ = this.store.select(fromDashboard.getStreamersState);
  }

  ngOnInit() { }
}