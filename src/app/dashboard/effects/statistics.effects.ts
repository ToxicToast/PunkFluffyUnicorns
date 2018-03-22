import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { DashboardService } from '@dashboard/services/dashboard.service';

import { LoadTeamStatisticsSuccess, LoadTeamStatisticsFailure, StatisticsActionTypes } from '@dashboard/actions/statistics.actions';

@Injectable()
export class StatisticsEffects {

  constructor(
    private actions: Actions,
    private service: DashboardService
  ) { }

  @Effect()
  loadStatistics$ = this.actions.ofType(StatisticsActionTypes.LOAD_TEAM_STATISTICS)
    .switchMap(() => this.service.getStatistics()
      .map(data => new LoadTeamStatisticsSuccess(data))
      .catch(err => of(new LoadTeamStatisticsFailure())));

}
