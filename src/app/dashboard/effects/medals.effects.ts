import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { DashboardService } from '@dashboard/services/dashboard.service';

import { LoadTeamMedalsSuccess, LoadTeamMedalsFailure, MedalsActionTypes } from '@dashboard/actions/medals.actions';

@Injectable()
export class MedalsEffects {

  constructor(
    private actions: Actions,
    private service: DashboardService
  ) { }

  @Effect()
  loadMedals$ = this.actions.ofType(MedalsActionTypes.LOAD_TEAM_MEDALS)
    .switchMap(() => this.service.getMedals()
      .map(data => new LoadTeamMedalsSuccess(data))
      .catch(err => of(new LoadTeamMedalsFailure())));


}
