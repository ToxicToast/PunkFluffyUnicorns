import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromRoot from '@core/reducers/index';
import * as fromVideos from '@vod/reducers/video.reducers';
import * as fromSingle from '@vod/reducers/single.reducers';

export interface VodState {
  videos: fromVideos.State;
  single: fromSingle.State;
}

export interface State extends fromRoot.State {
  vods: VodState;
}

export const reducers = {
  videos: fromVideos.reducer,
  single: fromSingle.reducer
};

export const selectVodState = createFeatureSelector<VodState>('vods');
export const getVideosState = createSelector(selectVodState, (state: VodState) => state.videos);
export const getSingleState = createSelector(selectVodState, (state: VodState) => state.single);
