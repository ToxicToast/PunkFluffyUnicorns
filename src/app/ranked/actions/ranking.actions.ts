import { Action } from '@ngrx/store';

export enum RankingActionTypes {
LOAD_TEAM_RANKING = '[Team] Load Ranking',
LOAD_TEAM_RANKING_SUCCESS = '[Team] Load Ranking - Success',
LOAD_TEAM_RANKING_FAILURE = '[Team] Load Ranking - Failure',

LOAD_PLAYER_RANKING = '[Player] Load Ranking',
LOAD_PLAYER_RANKING_SUCCESS = '[Player] Load Ranking - Success',
LOAD_PLAYER_RANKING_FAILURE = '[Player] Load Ranking - Failure',
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
}

export type RankingActions = LoadTeamRanking | LoadTeamRankingSuccess | LoadTeamRankingFailure |
LoadPlayerRanking | LoadPlayerRankingSuccess | LoadPlayerRankingFailure;
