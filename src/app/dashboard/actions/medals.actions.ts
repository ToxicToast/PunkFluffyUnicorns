import { Action } from '@ngrx/store';

export enum MedalsActionTypes {
LOAD_TEAM_MEDALS = '[Team] Load Medals',
LOAD_TEAM_MEDALS_SUCCESS = '[Team] Load Medals - Success',
LOAD_TEAM_MEDALS_FAILURE = '[Team] Load Medals - Failure',
}

export class LoadTeamMedals implements Action {
  readonly type = MedalsActionTypes.LOAD_TEAM_MEDALS;
}

export class LoadTeamMedalsSuccess implements Action {
  readonly type = MedalsActionTypes.LOAD_TEAM_MEDALS_SUCCESS;
  constructor(public payload: any) { }
}

export class LoadTeamMedalsFailure implements Action {
  readonly type = MedalsActionTypes.LOAD_TEAM_MEDALS_FAILURE;
}

export type MedalsActions = LoadTeamMedals | LoadTeamMedalsSuccess | LoadTeamMedalsFailure;
