import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { DashboardService } from '@dashboard/services/dashboard.service';

import {
  LoadDashboardSuccess,
  LoadDashboardFailure,
  DashboardActionTypes
} from '@dashboard/actions/dashboard.actions';

// import { Dashboard } from '@dashboard/models/medals';

@Injectable()
export class DashboardEffects {

  constructor(
    private actions: Actions,
    private service: DashboardService
  ) { }

  @Effect()
  loadDashboard$ = this.actions.ofType(DashboardActionTypes.LOAD_DASHBOARD)
    .switchMap(() => this.service.getDashboard()
      .map((data: any) => new LoadDashboardSuccess(data.data))
      .catch(err => of(new LoadDashboardFailure(err))));

}
