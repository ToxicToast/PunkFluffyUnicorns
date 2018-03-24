import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AdminModule } from '@admin/admin.module';
import { DashboardModule } from '@dashboard/dashboard.module';
import { CoreModule } from '@core/core.module';
import { RankedModule } from '@ranked/ranked.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CustomRouterStateSerializer } from '@core/helpers/RouterState';
import { reducers, metaReducers } from '@core/reducers/index';

import { environment } from '@env/environment';

//
import { MedalsEffects } from '@dashboard/effects/medals.effects';
import { StatisticsEffects } from '@dashboard/effects/statistics.effects';
import { TrendsEffects } from '@dashboard/effects/trends.effects';
import { StreamersEffects } from '@dashboard/effects/streamers.effects';
import { RankingEffects } from '@ranked/effects/ranking.effects';
//

const StoreDevTools = !environment.production ? StoreDevtoolsModule.instrument() : [];
const RouterProvider = { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    EffectsModule.forRoot([
      MedalsEffects,
      StatisticsEffects,
      TrendsEffects,
      StreamersEffects,
      RankingEffects
    ]),
    StoreDevTools,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    AdminModule,
    DashboardModule,
    RankedModule
  ],
  providers: [
    RouterProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
