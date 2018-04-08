import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';

import * as fromVods from '@vod/reducers/vod.reducer';
import * as vods from '@vod/actions/vod.actions';

@Component({
  selector: 'app-vod-show-container',
  templateUrl: './vod-show-container.component.html',
  styleUrls: ['./vod-show-container.component.scss']
})
export class VodShowContainerComponent implements OnInit {

  vod$: Observable<any>;

  constructor(
    private store: Store<fromVods.State>,
    private route: ActivatedRoute
  ) {
    this.vod$ = this.store.select(fromVods.getSingleState);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.store.dispatch(new vods.LoadSingleVideo(id));
    });
  }

}
