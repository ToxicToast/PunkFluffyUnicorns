import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { VodService } from '@vod/services/vod.service';

import {
  LoadVideosSuccess,
  LoadVideosFailure,
  LoadSingleVideoSuccess,
  LoadSingleVideoFailure,
  VodActionTypes
} from '@vod/actions/vod.actions';

@Injectable()
export class VodsEffects {

  constructor(
    private actions: Actions,
    private service: VodService
  ) { }

  @Effect()
  loadVideos$ = this.actions.ofType(VodActionTypes.LOAD_VOD)
    .switchMap(() => this.service.getVideos()
      .map(data => new LoadVideosSuccess(this.getVodQuery(data)))
      .catch(err => of(new LoadVideosFailure())));

    @Effect()
    loadSingle$ = this.actions.ofType(VodActionTypes.LOAD_SINLGEVOD)
      .switchMap(payload => this.service.getSingle(payload)
        .map(data => new LoadSingleVideoSuccess(this.getVodQuery(data)))
        .catch(err => of(new LoadSingleVideoFailure())));


  private getVodQuery(payload) {
    console.error(payload);
    const { vodQuery } = payload.data;
    return vodQuery;
  }

}
