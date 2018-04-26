import { NewsActionTypes, NewsActions } from '@news/actions/news.actions';

export interface State {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  errorMessage: string;
  news: any[];
}

const initialState: State = {
  loading: false,
  loaded: false,
  error: false,
  errorMessage: '',
  news: [],
};

export function reducer(state = initialState, action: NewsActions): State {
  switch (action.type) {
    case NewsActionTypes.LOAD_NEWS: {
      return Object.assign({}, state, {
        loading: true,
        loaded: false,
        error: false,
        errorMessage: '',
        news: [],
      });
    }

    case NewsActionTypes.LOAD_NEWS_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        news: action.payload.newsQuery,
      });
    }

    case NewsActionTypes.LOAD_NEWS_FAILURE: {
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        error: true,
        errorMessage: action.payload,
        news: [],
      });
    }
    default:
      return state;
  }
}
