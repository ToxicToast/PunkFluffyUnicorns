import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { AuthService } from '@auth/services/auth.service';
import { ToastService } from '@core/services/toast.service';

import {
  AuthActionTypes,
  RegisterUserSuccess,
  RegisterUserFailure
} from '@auth/actions/auth.actions';

@Injectable()
export class RegisterEffects {

  constructor(
    private actions: Actions,
    private service: AuthService,
    private toastr: ToastService
  ) { }

  @Effect()
  registerUser$ = this.actions.ofType(AuthActionTypes.REGISTER_USER)
    .switchMap(payload => this.service.userRegister(payload)
      .map(data => this.registerSuccess(data))
      .catch(err => {
        this.toastr.showError('Failed registering User');
        return of(new RegisterUserFailure());
      }));

  private registerSuccess(data) {
    const { payload } = data;
    const { username } = payload;
    this.toastr.showSuccess('Successfully registered User - Welcome ' + username);
    return new RegisterUserSuccess(data);
  }

}
