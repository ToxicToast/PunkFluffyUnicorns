import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CoreModule } from '@core/core.module';

import { reducers } from '@news/reducers/news.reducer';
import { NewsEffects } from '@news/effects/news.effects';

import { NewsService } from '@news/services/news.service';

import { NewsRoutingModule } from '@news/news-routing.module';
import { NewsIndexContainerComponent } from '@news/containers/news-index-container/news-index-container.component';
import { NewsListComponent } from '@news/components/news-list/news-list.component';

import { MarkdownModule } from 'ngx-md';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule,
    StoreModule.forFeature('news', reducers),
    EffectsModule.forFeature([]),
    CoreModule,
    MarkdownModule.forRoot(),
  ],
  declarations: [
    NewsIndexContainerComponent,
    NewsListComponent
  ],
  providers: [
    NewsService
  ],
  exports: [
    NewsIndexContainerComponent
  ]
})
export class NewsModule { }
