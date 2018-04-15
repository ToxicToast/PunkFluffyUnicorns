import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from '@guides/reducers/guides.reducer';

import { CoreModule } from '@core/core.module';

import { GuidesService } from '@guides/services/guides.service';

import { GuidesRoutingModule } from './guides-routing.module';
import { GuidesIndexContainerComponent } from './containers/guides-index-container/guides-index-container.component';
import { GuidesListComponent } from './components/guides-list/guides-list.component';

@NgModule({
  imports: [
    CommonModule,
    GuidesRoutingModule,
    StoreModule.forFeature('guides', reducers),
    EffectsModule.forFeature([]),
    CoreModule
  ],
  declarations: [
    GuidesIndexContainerComponent,
    GuidesListComponent
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
