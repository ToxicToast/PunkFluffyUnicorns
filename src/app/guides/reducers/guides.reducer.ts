import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromRoot from '@core/reducers/index';
import * as fromGuides from '@guides/reducers/guides.reducers';

export interface GuidesState {
  guides: fromGuides.State;
}

export interface State extends fromRoot.State {
  guides: GuidesState;
}

export const reducers = {
  guides: fromGuides.reducer,
};

export const selectGuidesState = createFeatureSelector<GuidesState>('guides');
export const getGuidesState = createSelector(selectGuidesState, (state: GuidesState) => state.guides);
