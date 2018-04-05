import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { OverwatchService } from '@core/services/overwatch.service';

import { LoadingBarComponent } from '@core/components/loading-bar/loading-bar.component';
import { MaintenanceComponent } from '@core/components/maintenance/maintenance.component';
import { HeaderComponent } from '@core/components/header/header.component';
import { LayoutComponent } from '@core/components/layout/layout.component';
import { NavigationComponent } from '@core/components/navigation/navigation.component';
import { ErrorBarComponent } from '@core/components/error-bar/error-bar.component';
import { WarningBarComponent } from '@core/components/warning-bar/warning-bar.component';

import { OverwatchHeroPipe } from '@core/pipes/overwatch-hero.pipe';
import { FirstUppercase } from '@core/pipes/FirstUppercase.pipe';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PerfectScrollbarModule
  ],
  declarations: [
    LoadingBarComponent,
    MaintenanceComponent,
    HeaderComponent,
    LayoutComponent,
    NavigationComponent,
    ErrorBarComponent,
    WarningBarComponent,
    OverwatchHeroPipe
  ],
  exports: [
    LoadingBarComponent,
    MaintenanceComponent,
    HeaderComponent,
    LayoutComponent,
    NavigationComponent,
    ErrorBarComponent,
    WarningBarComponent,
    OverwatchHeroPipe
  ],
  providers: [
    OverwatchService
  ]
})
export class CoreModule { }
