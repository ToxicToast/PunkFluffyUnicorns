import { DashboardActionTypes, DashboardActions } from '@dashboard/actions/dashboard.actions';
import { DashboardModel } from '@dashboard/models/dashboard';

export interface State {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  errorMessage: string;
  overwatchRanking: DashboardModel[];
  overwatchPlaytime: any[];
}

const initialState: State = {
  loading: false,
  loaded: false,
  error: false,
  errorMessage: '',
  overwatchRanking: [],
  overwatchPlaytime: []
};


  export function reducer(state = initialState, action: DashboardActions): State {
    switch (action.type) {
      case DashboardActionTypes.LOAD_DASHBOARD: {
        return Object.assign({}, state, {
          loading: true,
          loaded: false,
          error: false,
        });
      }

      case DashboardActionTypes.LOAD_DASHBOARD_SUCCESS: {
        return Object.assign({}, state, {
          loading: false,
          loaded: true,
          error: false,
          overwatchRanking: action.payload.rankingQuery,
          overwatchPlaytime: action.payload.playtimeQuery
        });
      }

      case DashboardActionTypes.LOAD_DASHBOARD_FAILURE: {
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
