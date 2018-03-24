import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromRoot from '@core/reducers/index';
import * as fromRanking from '@ranked/reducers/ranking.reducers';

export interface RankedState {
  ranking: fromRanking.State;
}

export interface State extends fromRoot.State {
  ranked: RankedState;
}

export const reducers = {
  ranking: fromRanking.reducer,
};

export const selectRankedState = createFeatureSelector<RankedState>('ranked');
export const getRankingState = createSelector(selectRankedState, (state: RankedState) => state.ranking);
