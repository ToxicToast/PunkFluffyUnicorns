import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { LoadingBarComponent } from '@core/components/loading-bar/loading-bar.component';
import { MaintenanceComponent } from '@core/components/maintenance/maintenance.component';
import { HeaderComponent } from '@core/components/header/header.component';
import { LayoutComponent } from '@core/components/layout/layout.component';
import { NavigationComponent } from '@core/components/navigation/navigation.component';
import { ErrorBarComponent } from '@core/components/error-bar/error-bar.component';
import { WarningBarComponent } from '@core/components/warning-bar/warning-bar.component';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    PerfectScrollbarModule
  ],
  declarations: [
    LoadingBarComponent,
    MaintenanceComponent,
    HeaderComponent,
    LayoutComponent,
    NavigationComponent,
    ErrorBarComponent,
    WarningBarComponent
  ],
  exports: [
    LoadingBarComponent,
    MaintenanceComponent,
    HeaderComponent,
    LayoutComponent,
    NavigationComponent,
    ErrorBarComponent
  ]
})
export class CoreModule { }
