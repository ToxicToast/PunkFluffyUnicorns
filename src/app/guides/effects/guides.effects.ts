import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { GuidesService } from '@guides/services/guides.service';
import { ToastService } from '@core/services/toast.service';

import {
  GuidesActionTypes,
  LoadGuidesSuccess,
  LoadGuidesFailure
} from '@guides/actions/guides.actions';

@Injectable()
export class GuidesEffects {

  constructor(
    private actions: Actions,
    private service: GuidesService,
    private toastr: ToastService
  ) { }

  @Effect()
  loadDashboard$ = this.actions.ofType(GuidesActionTypes.LOAD_GUIDES)
    .switchMap(() => this.service.getGuides()
      .map((data: any) => new LoadGuidesSuccess(data.data))
      .catch(err => {
        this.toastr.showError('Failed loading Guides');
        return of(new LoadGuidesFailure(err));
      }));

}
