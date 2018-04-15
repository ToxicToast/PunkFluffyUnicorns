import { GuidesActionTypes, GuidesActions } from '@guides/actions/guides.actions';
// import { GuidesModel } from '@guides/models/guides/';

export interface State {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  errorMessage: string;
  guides: any[];
}

const initialState: State = {
  loading: false,
  loaded: false,
  error: false,
  errorMessage: '',
  guides: [],
};

export function reducer(state = initialState, action: GuidesActions): State {
  switch (action.type) {
    case GuidesActionTypes.LOAD_GUIDES: {
      return Object.assign({}, state, {
        loading: true,
        loaded: false,
        error: false,
      });
    }

    case GuidesActionTypes.LOAD_GUIDES_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        error: false,
        guides: action.payload.guidesQuery,
      });
    }

    case GuidesActionTypes.LOAD_GUIDES_FAILURE: {
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        error: true,
        errorMessage: action.payload
      });
    }
    default:
      return state;
  }
}
