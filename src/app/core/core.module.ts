import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingBarComponent } from '@core/components/loading-bar/loading-bar.component';
import { MaintenanceComponent } from '@core/components/maintenance/maintenance.component';
import { HeaderComponent } from '@core/components/header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoadingBarComponent,
    MaintenanceComponent,
    HeaderComponent
  ],
  exports: [
    LoadingBarComponent,
    MaintenanceComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
