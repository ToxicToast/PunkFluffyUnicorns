import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromRoot from '@core/reducers/index';
import * as fromDashboard from '@dashboard/reducers/dashboard.reducers';

export interface DashboardState {
  dashboard: fromDashboard.State;
}

export interface State extends fromRoot.State {
  dashboard: DashboardState;
}

export const reducers = {
  dashboard: fromDashboard.reducer,
};

export const selectDashboardState = createFeatureSelector<DashboardState>('dashboard');
export const getDashboardState = createSelector(selectDashboardState, (state: DashboardState) => state.dashboard);
