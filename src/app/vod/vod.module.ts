import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CoreModule } from '@core/core.module';

import { VodRoutingModule } from '@vod/vod-routing.module';
import { VodIndexContainerComponent } from '@vod/containers/vod-index-container/vod-index-container.component';

@NgModule({
  imports: [
    CommonModule,
    VodRoutingModule,
    // StoreModule.forFeature('ranked', reducers),
    EffectsModule.forFeature([]),
    CoreModule,
  ],
  declarations: [
    VodIndexContainerComponent
  ]
})
export class VodModule { }
