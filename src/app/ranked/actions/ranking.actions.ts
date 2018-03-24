import { Action } from '@ngrx/store';

export enum RankingActionTypes {
LOAD_TEAM_RANKING = '[Team] Load Ranking',
LOAD_TEAM_RANKING_SUCCESS = '[Team] Load Ranking - Success',
LOAD_TEAM_RANKING_FAILURE = '[Team] Load Ranking - Failure',
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

export type RankingActions = LoadTeamRanking | LoadTeamRankingSuccess | LoadTeamRankingFailure;
