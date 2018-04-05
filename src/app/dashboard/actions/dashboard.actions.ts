import { Action } from '@ngrx/store';

export enum DashboardActionTypes {
LOAD_DASHBOARD = '[Dashboard] Load Dashboard',
LOAD_DASHBOARD_SUCCESS = '[Dashboard] Load Dashboard - Success',
LOAD_DASHBOARD_FAILURE = '[Dashboard] Load Dashboard - Failure',
}

export class LoadDashboard implements Action {
  readonly type = DashboardActionTypes.LOAD_DASHBOARD;
}

export class LoadDashboardSuccess implements Action {
  readonly type = DashboardActionTypes.LOAD_DASHBOARD_SUCCESS;
  constructor(public payload: any) { }
}

export class LoadDashboardFailure implements Action {
  readonly type = DashboardActionTypes.LOAD_DASHBOARD_FAILURE;
  constructor(public payload: string) { }
}

export type DashboardActions = LoadDashboard | LoadDashboardSuccess | LoadDashboardFailure;
