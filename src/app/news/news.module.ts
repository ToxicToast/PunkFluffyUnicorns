import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CoreModule } from '@core/core.module';

import { NewsRoutingModule } from '@news/news-routing.module';
import { NewsIndexContainerComponent } from '@news/containers/news-index-container/news-index-container.component';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule,
    // StoreModule.forFeature('vods', reducers),
    EffectsModule.forFeature([]),
    CoreModule,
  ],
  declarations: [
    NewsIndexContainerComponent
  ],
  providers: [

  ],
  exports: [
    NewsIndexContainerComponent
  ]
})
export class NewsModule { }
