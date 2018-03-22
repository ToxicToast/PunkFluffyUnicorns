import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { CoreModule } from '@core/core.module';

import { RankedRoutingModule } from '@ranked/ranked-routing.module';
import { RankedIndexContainerComponent } from '@ranked/containers/ranked-index-container/ranked-index-container.component';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    RankedRoutingModule,
    // StoreModule.forFeature('dashboard', reducers),
    EffectsModule.forFeature([]),
    CoreModule
  ],
  declarations: [
  RankedIndexContainerComponent],
  exports: [
  ],
  providers: []
})
export class RankedModule { }
