import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingBarComponent } from '@core/components/loading-bar/loading-bar.component';
import { MaintenanceComponent } from '@core/components/maintenance/maintenance.component';
import { HeaderComponent } from '@core/components/header/header.component';
import { LayoutComponent } from '@core/components/layout/layout.component';
import { NavigationComponent } from '@core/components/navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoadingBarComponent,
    MaintenanceComponent,
    HeaderComponent,
    LayoutComponent,
    NavigationComponent
  ],
  exports: [
    LoadingBarComponent,
    MaintenanceComponent,
    HeaderComponent,
    LayoutComponent,
    NavigationComponent
  ]
})
export class CoreModule { }
