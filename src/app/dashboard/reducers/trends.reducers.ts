import { TrendsActionTypes, TrendsActions } from '@dashboard/actions/trends.actions';

export interface State {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  trends: any[];
}

const initialState: State = {
  loading: false,
  loaded: false,
  error: false,
  trends: []
};

export function reducer(state = initialState, action: TrendsActions): State {

switch (action.type) {
  case TrendsActionTypes.LOAD_TEAM_TRENDS: {
    return Object.assign({}, state, {
      loading: true,
      loaded: false,
      error: false,
      trends: []
    });
  }
  case TrendsActionTypes.LOAD_TEAM_TRENDS_SUCCESS: {
    return Object.assign({}, state, {
      loading: false,
      loaded: true,
      trends: action.payload
    });
  }
  case TrendsActionTypes.LOAD_TEAM_TRENDS_FAILURE: {
    return Object.assign({}, state, {
      loading: false,
      loaded: true,
      error: true,
      trends: []
    });
  }
  default:
    return state;
}

}
