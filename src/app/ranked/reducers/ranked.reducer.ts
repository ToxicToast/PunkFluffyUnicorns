import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromRoot from '@core/reducers/index';
import * as fromRanking from '@ranked/reducers/ranking.reducers';
import * as fromProfile from '@ranked/reducers/profile.reducers';

export interface RankedState {
  ranking: fromRanking.State;
  profile: fromProfile.State;
}

export interface State extends fromRoot.State {
  ranked: RankedState;
}

export const reducers = {
  ranking: fromRanking.reducer,
  profile: fromProfile.reducer
};

export const selectRankedState = createFeatureSelector<RankedState>('ranked');
export const getRankingState = createSelector(selectRankedState, (state: RankedState) => state.ranking);
export const getProfileState = createSelector(selectRankedState, (state: RankedState) => state.profile);
