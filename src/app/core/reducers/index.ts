import { ActionReducerMap, createSelector, createFeatureSelector, ActionReducer, MetaReducer, combineReducers } from '@ngrx/store';
import {compose} from '@ngrx/core';
import { environment } from '@env/environment';
//
import { RouterStateUrl } from '@core/helpers/RouterState';
//
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from 'ngrx-store-logger';
//
import * as fromRouter from '@ngrx/router-store';

export interface State {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}
export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
};

const developmentReducer: Function = compose(storeLogger(), combineReducers)(reducers);

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    developmentReducer(state, action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger, storeFreeze] : [];
