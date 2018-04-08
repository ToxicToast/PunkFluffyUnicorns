import { VodActions, VodActionTypes } from '@vod/actions/vod.actions';

export interface State {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  videos: any;
}

const initialState: State = {
  loading: false,
  loaded: false,
  error: false,
  videos: []
};

export function reducer(state = initialState, action: VodActions): State {
  switch (action.type) {
    case VodActionTypes.LOAD_VOD: {
      return Object.assign({}, state, {
        loading: true,
        loaded: false,
        error: false,
        videos: []
      });
    }
    case VodActionTypes.LOAD_VOD_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        error: false,
        videos: action.payload || []
      });
    }
    case VodActionTypes.LOAD_VOD_FAILURE: {
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        error: true,
        videos: []
      });
    }
    default:
      return state;
  }
}
