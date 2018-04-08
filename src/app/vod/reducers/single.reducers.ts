import { VodActions, VodActionTypes } from '@vod/actions/vod.actions';

export interface State {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  video: any;
}

const initialState: State = {
  loading: false,
  loaded: false,
  error: false,
  video: []
};

export function reducer(state = initialState, action: VodActions): State {
  switch (action.type) {
    case VodActionTypes.LOAD_SINLGEVOD: {
      return Object.assign({}, state, {
        loading: true,
        loaded: false,
        error: false,
        video: []
      });
    }
    case VodActionTypes.LOAD_SINLGEVOD_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        error: false,
        video: action.payload[0] || []
      });
    }
    case VodActionTypes.LOAD_SINLGEVOD_FAILURE: {
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        error: true,
        video: []
      });
    }
    default:
      return state;
  }
}
