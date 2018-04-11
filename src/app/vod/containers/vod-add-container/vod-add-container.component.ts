import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { validateYoutubelink } from '@core/validators/youtubeLink.validator';

import { Store } from '@ngrx/store';

import * as fromVods from '@vod/reducers/vod.reducer';
import * as vods from '@vod/actions/vod.actions';

@Component({
  selector: 'app-vod-add-container',
  templateUrl: './vod-add-container.component.html',
  styleUrls: ['./vod-add-container.component.scss']
})
export class VodAddContainerComponent implements OnInit {

  vodForm: FormGroup;

  constructor(
    private store: Store<fromVods.State>,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  saveDialog() {
    this.store.dispatch(new vods.AddVideo(this.vodForm.value));
    this.cancelDialog();
    this.store.dispatch(new vods.LoadVideos());
  }

  cancelDialog() {
    this.vodForm.reset();
  }

  private createForm() {
    this.vodForm = this.fb.group({
      link: [null, [Validators.required, validateYoutubelink]],
    });
  }

}
