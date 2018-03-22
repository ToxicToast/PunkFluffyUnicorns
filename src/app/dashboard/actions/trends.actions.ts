import { Action } from '@ngrx/store';

export enum TrendsActionTypes {
LOAD_TEAM_TRENDS = '[Team] Load Trends',
LOAD_TEAM_TRENDS_SUCCESS = '[Team] Load Trends - Success',
LOAD_TEAM_TRENDS_FAILURE = '[Team] Load Trends - Failure',
}

export class LoadTeamTrends implements Action {
  readonly type = TrendsActionTypes.LOAD_TEAM_TRENDS;
}

export class LoadTeamTrendsSuccess implements Action {
  readonly type = TrendsActionTypes.LOAD_TEAM_TRENDS_SUCCESS;
  constructor(public payload: any) { }
}

export class LoadTeamTrendsFailure implements Action {
  readonly type = TrendsActionTypes.LOAD_TEAM_TRENDS_FAILURE;
}

export type TrendsActions = LoadTeamTrends | LoadTeamTrendsSuccess | LoadTeamTrendsFailure;
