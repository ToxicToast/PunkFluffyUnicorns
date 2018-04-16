import { Action } from '@ngrx/store';

export enum GuidesActionTypes {
  LOAD_GUIDES = '[Guides] Load Guides',
  LOAD_GUIDES_SUCCESS = '[Guides] Load Guides - Success',
  LOAD_GUIDES_FAILURE = '[Guides] Load Guides - Failure',

  LOAD_SINGLE_GUIDE = '[Guides] Load Single Guide',
  LOAD_SINGLE_GUIDE_SUCCESS = '[Guides] Load Single Guide - Success',
  LOAD_SINGLE_GUIDE_FAILURE = '[Guides] Load Single Guide - Failure',
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

export class LoadSingleGuides implements Action {
  readonly type = GuidesActionTypes.LOAD_SINGLE_GUIDE;
  constructor(public payload: number) { }
}

export class LoadSingleGuidesSuccess implements Action {
  readonly type = GuidesActionTypes.LOAD_SINGLE_GUIDE_SUCCESS;
  constructor(public payload: any) { }
}

export class LoadSingleGuidesFailure implements Action {
  readonly type = GuidesActionTypes.LOAD_SINGLE_GUIDE_FAILURE;
  constructor(public payload: string) { }
}

export type GuidesActions = LoadGuides | LoadGuidesSuccess | LoadGuidesFailure |
LoadSingleGuides | LoadSingleGuidesSuccess | LoadSingleGuidesFailure;

