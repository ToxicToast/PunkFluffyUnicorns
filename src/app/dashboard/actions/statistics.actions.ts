import { Action } from '@ngrx/store';

export enum StatisticsActionTypes {
LOAD_TEAM_STATISTICS = '[Team] Load Statistics',
LOAD_TEAM_STATISTICS_SUCCESS = '[Team] Load Statistics - Success',
LOAD_TEAM_STATISTICS_FAILURE = '[Team] Load Statistics - Failure',
}

export class LoadTeamStatistics implements Action {
  readonly type = StatisticsActionTypes.LOAD_TEAM_STATISTICS;
}

export class LoadTeamStatisticsSuccess implements Action {
  readonly type = StatisticsActionTypes.LOAD_TEAM_STATISTICS_SUCCESS;
  constructor(public payload: any) { }
}

export class LoadTeamStatisticsFailure implements Action {
  readonly type = StatisticsActionTypes.LOAD_TEAM_STATISTICS_FAILURE;
}

export type StatisticsActions = LoadTeamStatistics | LoadTeamStatisticsSuccess | LoadTeamStatisticsFailure;
