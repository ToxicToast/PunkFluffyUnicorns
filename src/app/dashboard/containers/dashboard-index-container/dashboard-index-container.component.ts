import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import * as fromDashboard from '@dashboard/reducers/dashboard.reducer';

import { fadeAnimation } from '@core/helpers/Animation';

@Component({
  selector: 'app-dashboard-index-container',
  templateUrl: './dashboard-index-container.component.html',
  styleUrls: ['./dashboard-index-container.component.scss'],
  animations: [fadeAnimation]
})
export class DashboardIndexContainerComponent implements OnInit {

  dashboard$: Observable<any>;

  constructor(
    private store: Store<fromDashboard.State>
  ) {
    this.dashboard$ = this.store.select(fromDashboard.getDashboardState);
  }

  ngOnInit() { }
}
