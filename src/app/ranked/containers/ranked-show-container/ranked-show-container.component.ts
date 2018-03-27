import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap } from '@angular/router';

import * as fromRoot from '@core/reducers/index';
import * as fromRanked from '@ranked/reducers/ranked.reducer';
import * as ranking from '@ranked/actions/ranking.actions';

@Component({
  selector: 'app-ranked-show-container',
  templateUrl: './ranked-show-container.component.html',
  styleUrls: ['./ranked-show-container.component.scss']
})
export class RankedShowContainerComponent implements OnInit {

  rankings$: Observable<any>;
  router$: any;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromRanked.State>,
  ) {
    this.dispatchProfile();
    this.rankings$ = this.store.select(fromRanked.selectRankedState);
  }

  ngOnInit() {
  }

  playerUpdate(playerId) {
    this.store.dispatch(new ranking.UpdatePlayerRanking(playerId));
    this.store.dispatch(new ranking.LoadPlayerRanking(playerId));
  }

  private dispatchProfile() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.store.dispatch(new ranking.LoadPlayerRanking(params.get('id')));
    });
  }

}
