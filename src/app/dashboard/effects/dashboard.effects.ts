import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { DashboardService } from '@dashboard/services/dashboard.service';
import { ToastService } from '@core/services/toast.service';

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
    private service: DashboardService,
    private toastr: ToastService
  ) { }

  @Effect()
  loadDashboard$ = this.actions.ofType(DashboardActionTypes.LOAD_DASHBOARD)
    .switchMap(() => this.service.getDashboard()
      .map((data: any) => new LoadDashboardSuccess(data.data))
      .catch(err => {
        this.toastr.showError('Failed loading Stats');
        this.toastr.showError('Failed loading Medals');
        this.toastr.showError('Failed loading KPD');
        this.toastr.showError('Failed loading Most Played Heroes');
        return of(new LoadDashboardFailure(err));
      }));

}
