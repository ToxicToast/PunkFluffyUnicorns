import { StreamersActionTypes, StreamersActions } from '@dashboard/actions/streamers.actions';

export interface State {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  streamers: any[];
}

const initialState: State = {
  loading: false,
  loaded: false,
  error: false,
  streamers: []
};

export function reducer(state = initialState, action: StreamersActions): State {

switch (action.type) {
  case StreamersActionTypes.LOAD_TEAM_STREAMERS: {
    return Object.assign({}, state, {
      loading: true,
      loaded: false,
      error: false,
      streamers: []
    });
  }
  case StreamersActionTypes.LOAD_TEAM_STREAMERS_SUCCESS: {
    return Object.assign({}, state, {
      loading: false,
      loaded: true,
      streamers: action.payload
    });
  }
  case StreamersActionTypes.LOAD_TEAM_STREAMERS_FAILURE: {
    return Object.assign({}, state, {
      loading: false,
      loaded: true,
      error: true,
      streamers: []
    });
  }
  default:
    return state;
}

}
