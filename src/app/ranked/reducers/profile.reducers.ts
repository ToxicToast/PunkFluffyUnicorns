import { RankingActions, RankingActionTypes } from '@ranked/actions/ranking.actions';

export interface State {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  profile: any;
}

const initialState: State = {
  loading: false,
  loaded: false,
  error: false,
  profile: []
};

export function reducer(state = initialState, action: RankingActions): State {
  switch (action.type) {
    case RankingActionTypes.LOAD_PLAYER_RANKING: {
      return Object.assign({}, state, {
        loading: true,
        loaded: false,
        error: false,
        profile: []
      });
    }

    case RankingActionTypes.LOAD_PLAYER_RANKING_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        error: false,
        profile: action.payload[0] || []
      });
    }

    case RankingActionTypes.LOAD_PLAYER_RANKING_FAILURE: {
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        error: true,
        profile: []
      });
    }
    default:
      return state;
  }
}
