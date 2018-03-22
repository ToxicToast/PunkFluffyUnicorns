import { StatisticsActionTypes, StatisticsActions } from '@dashboard/actions/statistics.actions';

export interface State {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  wins: number;
  loses: number;
  draws: number;
  total: number;
}

const initialState: State = {
  loading: false,
  loaded: false,
  error: false,
  wins: 0,
  loses: 0,
  draws: 0,
  total: 0
};

export function reducer(state = initialState, action: StatisticsActions): State {

switch (action.type) {
  case StatisticsActionTypes.LOAD_TEAM_STATISTICS: {
    return Object.assign({}, state, {
      loading: true,
      loaded: false,
      error: false,
      wins: 0,
      loses: 0,
      draws: 0,
      total: 0
    });
  }
  case StatisticsActionTypes.LOAD_TEAM_STATISTICS_SUCCESS: {
    const { wins, loses, draws, total } = action.payload;
    console.error(action.payload);
    return Object.assign({}, state, {
      loading: false,
      loaded: true,
      error: false,
      wins,
      loses,
      draws,
      total
    });
  }
  default:
    return state;
}

}
