import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CoreModule } from '@core/core.module';

import { reducers } from '@vod/reducers/vod.reducer';
import { VodsEffects } from '@vod/effects/vods.effects';

import { VodService } from '@vod/services/vod.service';


import { VodRoutingModule } from '@vod/vod-routing.module';
import { VodIndexContainerComponent } from '@vod/containers/vod-index-container/vod-index-container.component';
import { VideoListComponent } from './components/video-list/video-list.component';

@NgModule({
  imports: [
    CommonModule,
    VodRoutingModule,
    StoreModule.forFeature('vods', reducers),
    EffectsModule.forFeature([]),
    CoreModule,
  ],
  declarations: [
    VodIndexContainerComponent,
    VideoListComponent
  ],
  exports: [
    VodIndexContainerComponent
  ],
  providers: [
    VodService
  ]
})
export class VodModule { }
