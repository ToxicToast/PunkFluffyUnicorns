import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import * as fromVods from '@vod/reducers/vod.reducer';
import * as vods from '@vod/actions/vod.actions';


@Component({
  selector: 'app-vod-index-container',
  templateUrl: './vod-index-container.component.html',
  styleUrls: ['./vod-index-container.component.scss']
})
export class VodIndexContainerComponent implements OnInit {

  vods$: Observable<any>;
  showAddModal: boolean = false;

  constructor(
    private store: Store<fromVods.State>,
    private router: Router
  ) {
    this.vods$ = this.store.select(fromVods.getVideosState);
  }

  ngOnInit() {
  }

  switchToVideo(videoId) {
    const url = `/vod/${videoId}`;
    this.router.navigate([url]);
  }

  switchToAdd() {
    const url = `/vod/add`;
    this.router.navigate([url]);
  }

}
