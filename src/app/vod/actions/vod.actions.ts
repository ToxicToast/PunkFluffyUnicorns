import { Action } from '@ngrx/store';

export enum VodActionTypes {
  LOAD_VOD = '[Vod] Load Videos',
  LOAD_VOD_SUCCESS = '[Vod] Load Videos - Success',
  LOAD_VOD_FAILURE = '[Vod] Load Videos - Failure',
}

export class LoadVideos implements Action {
  readonly type = VodActionTypes.LOAD_VOD;
}

export class LoadVideosSuccess implements Action {
  readonly type = VodActionTypes.LOAD_VOD_SUCCESS;
  constructor(public payload: any) { }
}

export class LoadVideosFailure implements Action {
  readonly type = VodActionTypes.LOAD_VOD_FAILURE;
}

export type VodActions = LoadVideos | LoadVideosSuccess | LoadVideosFailure;
