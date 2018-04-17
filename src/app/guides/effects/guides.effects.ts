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

import { Guides } from '@guides/models/guides.model';

import {
  GuidesActionTypes,
  LoadGuidesSuccess,
  LoadGuidesFailure,
  LoadSingleGuidesSuccess,
  LoadSingleGuidesFailure
} from '@guides/actions/guides.actions';

@Injectable()
export class GuidesEffects {

  constructor(
    private actions: Actions,
    private service: GuidesService,
    private toastr: ToastService
  ) { }

  @Effect()
  loadGuides$ = this.actions.ofType(GuidesActionTypes.LOAD_GUIDES)
    .switchMap(() => this.service.getGuides()
      .map((data: any) => new LoadGuidesSuccess(data.data))
      .catch(err => {
        this.toastr.showError('Failed loading Guides');
        return of(new LoadGuidesFailure(err));
      }));

      @Effect()
      loadSingle$ = this.actions.ofType(GuidesActionTypes.LOAD_SINGLE_GUIDE)
        .switchMap(payload => this.service.getSingle(payload)
        .map(data => new LoadSingleGuidesSuccess(this.getGuideQuery(data)))
        .catch(err => {
          this.toastr.showError('Failed loading Guide');
          return of(new LoadSingleGuidesFailure(err));
      }));


      private getGuideQuery(payload): Guides[] {
        const { guidesQuery } = payload.data;
        return guidesQuery;
      }

}
