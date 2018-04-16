import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';

import * as fromGuides from '@guides/reducers/guides.reducer';
import * as guides from '@guides/actions/guides.actions';

@Component({
  selector: 'app-guides-show-container',
  templateUrl: './guides-show-container.component.html',
  styleUrls: ['./guides-show-container.component.scss']
})
export class GuidesShowContainerComponent implements OnInit {

  guide$: Observable<any>;

  constructor(
    private store: Store<fromGuides.State>,
    private route: ActivatedRoute
  ) {
    this.guide$ = this.store.select(fromGuides.getSingleState);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.store.dispatch(new guides.LoadSingleGuides(id));
    });
  }

}
