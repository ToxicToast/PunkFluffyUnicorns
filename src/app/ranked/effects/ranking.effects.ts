import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { RankingService } from '@ranked/services/ranking.service';

import {
  LoadTeamRankingSuccess,
  LoadTeamRankingFailure,
  RankingActionTypes,
  LoadPlayerRankingSuccess,
  LoadPlayerRankingFailure,
  UpdatePlayerRankingSuccess,
  UpdatePlayerRankingFailure
} from '@ranked/actions/ranking.actions';

@Injectable()
export class RankingEffects {

  constructor(
    private actions: Actions,
    private service: RankingService
  ) { }

  @Effect()
  loadRankings$ = this.actions.ofType(RankingActionTypes.LOAD_TEAM_RANKING)
    .switchMap(() => this.service.getRanked()
      .map(data => new LoadTeamRankingSuccess(this.getData(data)))
      .catch(err => of(new LoadTeamRankingFailure())));

  @Effect()
  loadProfile$ = this.actions.ofType(RankingActionTypes.LOAD_PLAYER_RANKING)
    .switchMap((payload) => this.service.getProfile(payload)
      .map(data => new LoadPlayerRankingSuccess(this.getData(data)))
      .catch(err => of(new LoadPlayerRankingFailure())));
/*
  @Effect()
  updateProfile$ = this.actions.ofType(RankingActionTypes.UPDATE_PLAYER_RANKING)
    .switchMap((payload) => this.service.updateRanking(payload)
      .map(() => new UpdatePlayerRankingSuccess())
      .catch(err => of(new UpdatePlayerRankingFailure())));*/

  private getData(payload) {
    console.error(payload.data);
    return payload.data;
  }
}
