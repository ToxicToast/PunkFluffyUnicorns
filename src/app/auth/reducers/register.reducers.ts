import { AuthActions, AuthActionTypes } from '@auth/actions/auth.actions';
import { CreateUser } from '@auth/models/createUser.model';

export interface State {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  createUser: CreateUser;
}

const initialState: State = {
  loading: false,
  loaded: false,
  error: false,
  createUser: null
};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {
    case AuthActionTypes.REGISTER_USER: {
      return Object.assign({}, state, {
        loading: true,
        loaded: false,
        error: false,
        createUser: action.payload
      });
    }
    default:
      return state;
  }
}
