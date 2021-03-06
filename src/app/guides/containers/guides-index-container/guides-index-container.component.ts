import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import * as fromGuides from '@guides/reducers/guides.reducer';

import { fadeAnimation } from '@core/helpers/Animation';


@Component({
  selector: 'app-guides-index-container',
  templateUrl: './guides-index-container.component.html',
  styleUrls: ['./guides-index-container.component.scss'],
  animations: [fadeAnimation]
})
export class GuidesIndexContainerComponent implements OnInit {

  guides$: Observable<any>;

  constructor(
    private store: Store<fromGuides.State>,
    private router: Router
  ) { }

  ngOnInit() {
    this.guides$ = this.store.select(fromGuides.getGuidesState);
  }

  switchToGuide(guideId) {
    const url = `/guides/${guideId}`;
    this.router.navigate([url]);
  }

}
