import { Action } from '@ngrx/store';

export enum StreamersActionTypes {
LOAD_TEAM_STREAMERS = '[Team] Load Streamers',
LOAD_TEAM_STREAMERS_SUCCESS = '[Team] Load Streamers - Success',
LOAD_TEAM_STREAMERS_FAILURE = '[Team] Load Streamers - Failure',
}

export class LoadTeamStreamers implements Action {
  readonly type = StreamersActionTypes.LOAD_TEAM_STREAMERS;
}

export class LoadTeamStreamersSuccess implements Action {
  readonly type = StreamersActionTypes.LOAD_TEAM_STREAMERS_SUCCESS;
  constructor(public payload: any) { }
}

export class LoadTeamStreamersFailure implements Action {
  readonly type = StreamersActionTypes.LOAD_TEAM_STREAMERS_FAILURE;
}

export type StreamersActions = LoadTeamStreamers | LoadTeamStreamersSuccess | LoadTeamStreamersFailure;
