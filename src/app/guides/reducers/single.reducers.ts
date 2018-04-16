import { GuidesActions, GuidesActionTypes } from '@guides/actions/guides.actions';

export interface State {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  guide: any;
}

const initialState: State = {
  loading: false,
  loaded: false,
  error: false,
  guide: []
};

export function reducer(state = initialState, action: GuidesActions): State {
  switch (action.type) {
    case GuidesActionTypes.LOAD_SINGLE_GUIDE: {
      return Object.assign({}, state, {
        loading: true,
        loaded: false,
        error: false,
        guide: []
      });
    }
    case GuidesActionTypes.LOAD_SINGLE_GUIDE_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        error: false,
        guide: action.payload[0] || []
      });
    }
    case GuidesActionTypes.LOAD_SINGLE_GUIDE_FAILURE: {
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        error: true,
        guide: []
      });
    }
    default:
      return state;
  }
}
