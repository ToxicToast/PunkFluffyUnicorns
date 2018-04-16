import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from '@guides/reducers/guides.reducer';

import { CoreModule } from '@core/core.module';

import { GuidesService } from '@guides/services/guides.service';

import { GuidesRoutingModule } from '@guides/guides-routing.module';
import { GuidesIndexContainerComponent } from '@guides/containers/guides-index-container/guides-index-container.component';
import { GuidesListComponent } from '@guides/components/guides-list/guides-list.component';
import { GuidesShowContainerComponent } from '@guides/containers/guides-show-container/guides-show-container.component';
import { GuideReadComponent } from './Components/guide-read/guide-read.component';

import { MarkdownModule } from 'ngx-md';

@NgModule({
  imports: [
    CommonModule,
    GuidesRoutingModule,
    StoreModule.forFeature('guides', reducers),
    EffectsModule.forFeature([]),
    CoreModule,
    MarkdownModule.forRoot(),
  ],
  declarations: [
    GuidesIndexContainerComponent,
    GuidesListComponent,
    GuidesShowContainerComponent,
    GuideReadComponent
  ],
  providers: [
    GuidesService
  ],
  exports: [
    GuidesIndexContainerComponent,
    GuidesListComponent
  ]
})
export class GuidesModule { }
