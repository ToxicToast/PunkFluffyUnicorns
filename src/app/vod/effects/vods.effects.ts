import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { VodService } from '@vod/services/vod.service';
import { ToastService } from '@core/services/toast.service';


import {
  LoadVideosSuccess,
  LoadVideosFailure,
  LoadSingleVideoSuccess,
  LoadSingleVideoFailure,
  AddVideoSuccess,
  AddVideoFailure,
  VodActionTypes
} from '@vod/actions/vod.actions';

@Injectable()
export class VodsEffects {

  constructor(
    private actions: Actions,
    private service: VodService,
    private toastr: ToastService
  ) { }

  @Effect()
  loadVideos$ = this.actions.ofType(VodActionTypes.LOAD_VOD)
    .switchMap(() => this.service.getVideos()
      .map(data => new LoadVideosSuccess(this.getVodQuery(data)))
      .catch(err => {
        this.toastr.showError('Failed loading VODs');
        return of(new LoadVideosFailure());
      }));

    @Effect()
    loadSingle$ = this.actions.ofType(VodActionTypes.LOAD_SINLGEVOD)
      .switchMap(payload => this.service.getSingle(payload)
      .map(data => new LoadSingleVideoSuccess(this.getVodQuery(data)))
      .catch(err => {
        this.toastr.showError('Failed loading VOD');
        return of(new LoadSingleVideoFailure());
      }));

      @Effect()
      addVideo$ = this.actions.ofType(VodActionTypes.ADD_VOD)
        .switchMap(payload => this.service.addVideo(payload)
          .map(data => {
            this.toastr.showSuccess('Successfully adding VOD');
            return of(new AddVideoSuccess());
          }).catch(err => {
              this.toastr.showError('Failed adding VOD');
              return of(new LoadSingleVideoFailure());
            }));

  private getVodQuery(payload) {
    const { vodQuery } = payload.data;
    return vodQuery;
  }

}
