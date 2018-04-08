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
  VodActionTypes
} from '@vod/actions/vod.actions';

@Injectable()
export class VodsEffects {

  constructor(
    private actions: Actions,
    private service: VodService
  ) { }

  @Effect()
  loadRankings$ = this.actions.ofType(VodActionTypes.LOAD_VOD)
    .switchMap(() => this.service.getVideos()
      .map(data => new LoadVideosSuccess(this.getVodQuery(data)))
      .catch(err => of(new LoadVideosFailure())));


  private getVodQuery(payload) {
    const { vodQuery } = payload.data;
    return vodQuery;
  }

}
