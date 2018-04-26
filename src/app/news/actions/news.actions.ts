import { Action } from '@ngrx/store';

export enum NewsActionTypes {
  LOAD_NEWS = '[News] Load News',
  LOAD_NEWS_SUCCESS = '[News] Load News - Success',
  LOAD_NEWS_FAILURE = '[News] Load News - Failure',
}

export class LoadNews implements Action {
  readonly type = NewsActionTypes.LOAD_NEWS;
}

export class LoadNewsSuccess implements Action {
  readonly type = NewsActionTypes.LOAD_NEWS_SUCCESS;
  constructor(public payload: any) { }
}

export class LoadNewsFailure implements Action {
  readonly type = NewsActionTypes.LOAD_NEWS_FAILURE;
  constructor(public payload: string) { }
}

export type NewsActions = LoadNews | LoadNewsSuccess | LoadNewsFailure;
