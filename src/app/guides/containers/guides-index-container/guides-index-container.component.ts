import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import * as fromGuides from '@guides/reducers/guides.reducer';


@Component({
  selector: 'app-guides-index-container',
  templateUrl: './guides-index-container.component.html',
  styleUrls: ['./guides-index-container.component.scss']
})
export class GuidesIndexContainerComponent implements OnInit {

  guides$: Observable<any>;

  constructor(
    private store: Store<fromGuides.State>
  ) { }

  ngOnInit() {
    this.guides$ = this.store.select(fromGuides.getGuidesState);
  }

}
