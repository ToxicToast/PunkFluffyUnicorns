import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { CoreModule } from '@core/core.module';

import { reducers } from '@vod/reducers/vod.reducer';
import { VodsEffects } from '@vod/effects/vods.effects';

import { VodService } from '@vod/services/vod.service';


import { VodRoutingModule } from '@vod/vod-routing.module';
import { VodIndexContainerComponent } from '@vod/containers/vod-index-container/vod-index-container.component';
import { VideoListComponent } from '@vod/components/video-list/video-list.component';
import { VideoPlayerComponent } from '@vod/components/video-player/video-player.component';
import { VodShowContainerComponent } from '@vod/containers/vod-show-container/vod-show-container.component';
import { VodAddContainerComponent } from '@vod/containers/vod-add-container/vod-add-container.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VodRoutingModule,
    StoreModule.forFeature('vods', reducers),
    EffectsModule.forFeature([]),
    CoreModule,
  ],
  declarations: [
    VodIndexContainerComponent,
    VideoListComponent,
    VideoPlayerComponent,
    VodShowContainerComponent,
    VodAddContainerComponent,
  ],
  exports: [
    VodIndexContainerComponent,
    VodShowContainerComponent
  ],
  providers: [
    VodService
  ]
})
export class VodModule { }
