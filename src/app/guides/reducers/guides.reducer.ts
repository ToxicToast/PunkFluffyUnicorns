import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromRoot from '@core/reducers/index';
import * as fromGuides from '@guides/reducers/guides.reducers';
import * as fromSingle from '@guides/reducers/single.reducers';


export interface GuidesState {
  guides: fromGuides.State;
  single: fromSingle.State;
}

export interface State extends fromRoot.State {
  guides: GuidesState;
}

export const reducers = {
  guides: fromGuides.reducer,
  single: fromSingle.reducer
};

export const selectGuidesState = createFeatureSelector<GuidesState>('guides');
export const getGuidesState = createSelector(selectGuidesState, (state: GuidesState) => state.guides);
export const getSingleState = createSelector(selectGuidesState, (state: GuidesState) => state.single);
