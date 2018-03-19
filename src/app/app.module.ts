import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AdminModule } from '@admin/admin.module';
import { DashboardModule } from '@dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    DashboardModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
