import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromRoot from '@core/reducers/index';
import * as fromVideos from '@vod/reducers/video.reducers';

export interface VodState {
  videos: fromVideos.State;
}

export interface State extends fromRoot.State {
  vods: VodState;
}

export const reducers = {
  videos: fromVideos.reducer,
};

export const selectVodState = createFeatureSelector<VodState>('vods');
export const getVideosState = createSelector(selectVodState, (state: VodState) => state.videos);
