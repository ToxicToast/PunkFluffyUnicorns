import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { DashboardService } from '@dashboard/services/dashboard.service';

import { LoadTeamTrendsSuccess, LoadTeamTrendsFailure, TrendsActionTypes } from '@dashboard/actions/trends.actions';


@Injectable()
export class TrendsEffects {

  constructor(
    private actions: Actions,
    private service: DashboardService
  ) { }

  @Effect()
  loadTrends$ = this.actions.ofType(TrendsActionTypes.LOAD_TEAM_TRENDS)
    .switchMap(() => this.service.getTrends()
      .map(data => new LoadTeamTrendsSuccess(data))
      .catch(err => of(new LoadTeamTrendsFailure())));

}
