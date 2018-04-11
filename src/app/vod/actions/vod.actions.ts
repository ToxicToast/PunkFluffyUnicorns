import { Action } from '@ngrx/store';

export enum VodActionTypes {
  LOAD_VOD = '[Vod] Load Videos',
  LOAD_VOD_SUCCESS = '[Vod] Load Videos - Success',
  LOAD_VOD_FAILURE = '[Vod] Load Videos - Failure',

  LOAD_SINLGEVOD = '[Vod] Load Single Video',
  LOAD_SINLGEVOD_SUCCESS = '[Vod] Load Single Video - Success',
  LOAD_SINLGEVOD_FAILURE = '[Vod] Load Single Video - Failure',

  ADD_VOD = '[Vod] Add Video',
  ADD_VOD_SUCCESS = '[Vod] Add Video - Success',
  ADD_VOD_FAILURE = '[Vod] Add Video - Failure',
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

export class LoadSingleVideo implements Action {
  readonly type = VodActionTypes.LOAD_SINLGEVOD;
  constructor(public payload: number) { }
}

export class LoadSingleVideoSuccess implements Action {
  readonly type = VodActionTypes.LOAD_SINLGEVOD_SUCCESS;
  constructor(public payload: any) { }
}

export class LoadSingleVideoFailure implements Action {
  readonly type = VodActionTypes.LOAD_SINLGEVOD_FAILURE;
}

export class AddVideo implements Action {
  readonly type = VodActionTypes.ADD_VOD;
  constructor(public payload: any) { }
}

export class AddVideoSuccess implements Action {
  readonly type = VodActionTypes.ADD_VOD_SUCCESS;
}

export class AddVideoFailure implements Action {
  readonly type = VodActionTypes.ADD_VOD_FAILURE;
  constructor(public payload: string) { }
}

export type VodActions = LoadVideos | LoadVideosSuccess | LoadVideosFailure |
  LoadSingleVideo | LoadSingleVideoSuccess | LoadSingleVideoFailure |
  AddVideo | AddVideoSuccess | AddVideoFailure;
