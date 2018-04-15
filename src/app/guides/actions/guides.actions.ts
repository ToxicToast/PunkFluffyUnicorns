import { Action } from '@ngrx/store';

export enum GuidesActionTypes {
  LOAD_GUIDES = '[Guides] Load Guides',
  LOAD_GUIDES_SUCCESS = '[Guides] Load Guides - Success',
  LOAD_GUIDES_FAILURE = '[Guides] Load Guides - Failure',
}

export class LoadGuides implements Action {
  readonly type = GuidesActionTypes.LOAD_GUIDES;
}

export class LoadGuidesSuccess implements Action {
  readonly type = GuidesActionTypes.LOAD_GUIDES_SUCCESS;
  constructor(public payload: any) { }
}

export class LoadGuidesFailure implements Action {
  readonly type = GuidesActionTypes.LOAD_GUIDES_FAILURE;
  constructor(public payload: string) { }
}

export type GuidesActions = LoadGuides | LoadGuidesSuccess | LoadGuidesFailure;

