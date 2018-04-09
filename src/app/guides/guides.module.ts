import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@core/core.module';

import { GuidesRoutingModule } from './guides-routing.module';
import { GuidesIndexContainerComponent } from './containers/guides-index-container/guides-index-container.component';

@NgModule({
  imports: [
    CommonModule,
    GuidesRoutingModule,
    CoreModule
  ],
  declarations: [GuidesIndexContainerComponent]
})
export class GuidesModule { }
