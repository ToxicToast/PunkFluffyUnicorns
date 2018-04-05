import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import * as fromDashboard from '@dashboard/reducers/dashboard.reducer';

@Component({
  selector: 'app-dashboard-index-container',
  templateUrl: './dashboard-index-container.component.html',
  styleUrls: ['./dashboard-index-container.component.scss']
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
