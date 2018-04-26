import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { NewsService } from '@news/services/news.service';
import { ToastService } from '@core/services/toast.service';

import {
  NewsActionTypes,
  LoadNewsSuccess,
  LoadNewsFailure,
} from '@news/actions/news.actions';

@Injectable()
export class NewsEffects {

  constructor(
    private actions: Actions,
    private service: NewsService,
    private toastr: ToastService
  ) { }

  @Effect()
  loadNews$ = this.actions.ofType(NewsActionTypes.LOAD_NEWS)
    .switchMap(() => this.service.getNews()
      .map((data: any) => new LoadNewsSuccess(data.data))
      .catch(err => {
        this.toastr.showError('Failed loading News');
        return of(new LoadNewsFailure(err));
      }));

}
