import { RankingActions, RankingActionTypes } from '@ranked/actions/ranking.actions';

export interface State {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  ranking: any[];
}

const initialState: State = {
  loading: false,
  loaded: false,
  error: false,
  ranking: []
};

export function reducer(state = initialState, action: RankingActions): State {
  switch (action.type) {
    case RankingActionTypes.LOAD_TEAM_RANKING: {
      return Object.assign({}, state, {
        loading: true,
        loaded: false,
        error: false,
        ranking: []
      });
    }
    case RankingActionTypes.LOAD_TEAM_RANKING_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        error: false,
        ranking: action.payload
      });
    }
    case RankingActionTypes.LOAD_TEAM_RANKING_FAILURE: {
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        error: true,
        ranking: []
      });
    }
    default:
      return state;
  }
}
