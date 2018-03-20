import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from 'angularfire2';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AdminModule } from '@admin/admin.module';
import { DashboardModule } from '@dashboard/dashboard.module';
import { CoreModule } from '@core/core.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CustomRouterStateSerializer } from '@core/helpers/RouterState';
import { reducers, metaReducers } from '@core/reducers/index';

import { environment } from '@env/environment';

const StoreDevTools = !environment.production ? StoreDevtoolsModule.instrument() : [];
const RouterProvider = { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    EffectsModule.forRoot([]),
    StoreDevTools,
    CoreModule,
    AdminModule,
    DashboardModule
  ],
  providers: [
    RouterProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
