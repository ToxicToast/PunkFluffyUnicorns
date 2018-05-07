import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import * as fromNews from '@news/reducers/news.reducer';

import { fadeAnimation } from '@core/helpers/Animation';

@Component({
  selector: 'app-news-index-container',
  templateUrl: './news-index-container.component.html',
  styleUrls: ['./news-index-container.component.scss'],
  animations: [fadeAnimation]
})
export class NewsIndexContainerComponent implements OnInit {

  news$: Observable<any>;

  constructor(
    private store: Store<fromNews.State>,
    private router: Router
  ) { }

  ngOnInit() {
    this.news$ = this.store.select(fromNews.getNewsState);
  }

}
