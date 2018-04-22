import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromRoot from '@core/reducers/index';
import * as fromRegister from '@auth/reducers/register.reducers';

export interface AuthState {
  register: fromRegister.State;
}

export interface State extends fromRoot.State {
  auth: AuthState;
}

export const reducers = {
  register: fromRegister.reducer
};

export const selectAuthState = createFeatureSelector<AuthState>('auth');
export const getRegisterState = createSelector(selectAuthState, (state: AuthState) => state.register);
