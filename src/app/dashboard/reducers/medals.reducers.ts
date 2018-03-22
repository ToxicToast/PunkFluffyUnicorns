import { MedalsActionTypes, MedalsActions } from '@dashboard/actions/medals.actions';

export interface State {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  gold: number;
  silver: number;
  bronze: number;
}

const initialState: State = {
  loading: false,
  loaded: false,
  error: false,
  gold: 0,
  silver: 0,
  bronze: 0,
};

export function reducer(state = initialState, action: MedalsActions): State {

switch (action.type) {
  case MedalsActionTypes.LOAD_TEAM_MEDALS: {
    return Object.assign({}, state, {
      loading: true,
      loaded: false,
      error: false,
      gold: 0,
      silver: 0,
      bronze: 0,
    });
  }
  case MedalsActionTypes.LOAD_TEAM_MEDALS_FAILURE: {
    return Object.assign({}, state, {
      loading: false,
      loaded: true,
      error: true,
      gold: 0,
      silver: 0,
      bronze: 0,
    });
  }
  case MedalsActionTypes.LOAD_TEAM_MEDALS_SUCCESS: {
    const { gold, silver, bronze } = action.payload;
    return Object.assign({}, state, {
      loading: false,
      loaded: true,
      error: false,
      gold,
      silver,
      bronze,
    });
  }
  default:
    return state;
}

}
