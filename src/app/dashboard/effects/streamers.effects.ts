import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { DashboardService } from '@dashboard/services/dashboard.service';

import { LoadTeamStreamersSuccess, LoadTeamStreamersFailure, StreamersActionTypes } from '@dashboard/actions/streamers.actions';

@Injectable()
export class StreamersEffects {

  constructor(
    private actions: Actions,
    private service: DashboardService
  ) { }

  @Effect()
  loadStatistics$ = this.actions.ofType(StreamersActionTypes.LOAD_TEAM_STREAMERS)
    .switchMap(() => this.service.getStreamers()
      .map(data => new LoadTeamStreamersSuccess(data))
      .catch(err => of(new LoadTeamStreamersFailure())));

}
