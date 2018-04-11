import { Action } from '@ngrx/store';

import { RankingQuery } from '@core/dataContracts/RankingQuery.contract';

export enum RankingActionTypes {
LOAD_TEAM_RANKING = '[Team] Load Ranking',
LOAD_TEAM_RANKING_SUCCESS = '[Team] Load Ranking - Success',
LOAD_TEAM_RANKING_FAILURE = '[Team] Load Ranking - Failure',

LOAD_PLAYER_RANKING = '[Player] Load Ranking',
LOAD_PLAYER_RANKING_SUCCESS = '[Player] Load Ranking - Success',
LOAD_PLAYER_RANKING_FAILURE = '[Player] Load Ranking - Failure',

UPDATE_PLAYER_RANKING = '[Player] Update Ranking',
UPDATE_PLAYER_RANKING_SUCCESS = '[Player] Update Ranking - Success',
UPDATE_PLAYER_RANKING_FAILURE = '[Player] Update Ranking - Failure',
}

export class LoadTeamRanking implements Action {
  readonly type = RankingActionTypes.LOAD_TEAM_RANKING;
}

export class LoadTeamRankingSuccess implements Action {
  readonly type = RankingActionTypes.LOAD_TEAM_RANKING_SUCCESS;
  constructor(public payload: any) { }
}

export class LoadTeamRankingFailure implements Action {
  readonly type = RankingActionTypes.LOAD_TEAM_RANKING_FAILURE;
  constructor(public payload: string) { }
}

export class LoadPlayerRanking implements Action {
  readonly type = RankingActionTypes.LOAD_PLAYER_RANKING;
  constructor(public payload: number|string) { }
}

export class LoadPlayerRankingSuccess implements Action {
  readonly type = RankingActionTypes.LOAD_PLAYER_RANKING_SUCCESS;
  constructor(public payload: any) { }
}

export class LoadPlayerRankingFailure implements Action {
  readonly type = RankingActionTypes.LOAD_PLAYER_RANKING_FAILURE;
  constructor(public payload: string) { }
}

export class UpdatePlayerRanking implements Action {
  readonly type = RankingActionTypes.UPDATE_PLAYER_RANKING;
  constructor(public payload: number|string) { }
}

export class UpdatePlayerRankingSuccess implements Action {
  readonly type = RankingActionTypes.UPDATE_PLAYER_RANKING_SUCCESS;
}

export class UpdatePlayerRankingFailure implements Action {
  readonly type = RankingActionTypes.UPDATE_PLAYER_RANKING_FAILURE;
  constructor(public payload: string) { }
}

export type RankingActions = LoadTeamRanking | LoadTeamRankingSuccess | LoadTeamRankingFailure |
LoadPlayerRanking | LoadPlayerRankingSuccess | LoadPlayerRankingFailure | UpdatePlayerRanking |
UpdatePlayerRankingSuccess | UpdatePlayerRankingFailure;
