import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  REGISTER_USER = '[Auth] Register User',
  REGISTER_USER_SUCCESS = '[Auth] Register User - Success',
  REGISTER_USER_FAILURE = '[Auth] Register User - Failure',
}


export class RegisterUser implements Action {
  readonly type = AuthActionTypes.REGISTER_USER;
  constructor(public payload: any) { } // TODO: Need Interface
}

export class RegisterUserSuccess implements Action {
  readonly type = AuthActionTypes.REGISTER_USER_SUCCESS;
  constructor(public payload: any) { } // TODO: Need Interface
}

export class RegisterUserFailure implements Action {
  readonly type = AuthActionTypes.REGISTER_USER_FAILURE;
}

export type AuthActions = RegisterUser | RegisterUserSuccess | RegisterUserFailure;
