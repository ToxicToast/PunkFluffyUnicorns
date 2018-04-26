import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromRoot from '@core/reducers/index';
import * as fromNews from '@news/reducers/news.reducers';

export interface NewsState {
  news: fromNews.State;
}

export interface State extends fromRoot.State {
  news: NewsState;
}

export const reducers = {
  news: fromNews.reducer
};

export const selectNewsState = createFeatureSelector<NewsState>('news');
export const getNewsState = createSelector(selectNewsState, (state: NewsState) => state.news);
