import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import * as fromRanked from '@ranked/reducers/ranked.reducer';
import * as ranking from '@ranked/actions/ranking.actions';

@Component({
  selector: 'app-ranked-index-container',
  templateUrl: './ranked-index-container.component.html',
  styleUrls: ['./ranked-index-container.component.scss']
})
export class RankedIndexContainerComponent implements OnInit {

  rankings$: Observable<any>;

  constructor(
    private store: Store<fromRanked.State>
  ) {
    this.rankings$ = this.store.select(fromRanked.getRankingState);
   }

  ngOnInit() { }

}
