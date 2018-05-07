import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import * as fromRanked from '@ranked/reducers/ranked.reducer';
import * as ranking from '@ranked/actions/ranking.actions';

import { fadeAnimation } from '@core/helpers/Animation';

@Component({
  selector: 'app-ranked-index-container',
  templateUrl: './ranked-index-container.component.html',
  styleUrls: ['./ranked-index-container.component.scss'],
  animations: [fadeAnimation]
})
export class RankedIndexContainerComponent implements OnInit {

  rankings$: Observable<any>;

  constructor(
    private store: Store<fromRanked.State>,
    private router: Router
  ) {
    this.rankings$ = this.store.select(fromRanked.getRankingState);
   }

  ngOnInit() { }

  switchToPlayer(playerId) {
    const url = `/ranked/${playerId}`;
    this.router.navigate([url]);
  }

}
