import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingBarComponent } from '@core/components/loading-bar/loading-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoadingBarComponent
  ],
  exports: [
    LoadingBarComponent
  ]
})
export class CoreModule { }
