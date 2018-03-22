import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import { Profiles } from '@dashboard/models/profiles';

@Component({
  selector: 'app-ranking-index-container',
  templateUrl: './ranking-index-container.component.html',
  styleUrls: ['./ranking-index-container.component.scss']
})
export class RankingIndexContainerComponent implements OnInit {

  loading$: Observable<boolean>;
  loaded$: Observable<boolean>;
  error$: Observable<boolean>;
  errorMessage$: Observable<string>;
  profiles$: Observable<Profiles[]>;

  constructor() { }

  ngOnInit() { }
}
