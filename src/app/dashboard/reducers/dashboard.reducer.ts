import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromRoot from '@core/reducers/index';
import * as fromMedals from '@dashboard/reducers/medals.reducers';
import * as fromStatistics from '@dashboard/reducers/statistics.reducers';
import * as fromTrends from '@dashboard/reducers/trends.reducers';
import * as fromStreamers from '@dashboard/reducers/streamers.reducers';

export interface DashboardState {
  medals: fromMedals.State;
  statistics: fromStatistics.State;
  trends: fromTrends.State;
  streamers: fromStreamers.State;
}

export interface State extends fromRoot.State {
  dashboard: DashboardState;
}

export const reducers = {
  medals: fromMedals.reducer,
  statistics: fromStatistics.reducer,
  trends: fromTrends.reducer,
  streamers: fromStreamers.reducer
};

export const selectDashboardState = createFeatureSelector<DashboardState>('dashboard');
export const getMedalsState = createSelector(selectDashboardState, (state: DashboardState) => state.medals);
export const getStatisticsState = createSelector(selectDashboardState, (state: DashboardState) => state.statistics);
export const getTrendsState = createSelector(selectDashboardState, (state: DashboardState) => state.trends);
export const getStreamersState = createSelector(selectDashboardState, (state: DashboardState) => state.streamers);
