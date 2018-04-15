import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';


import { ToastrModule } from 'ngx-toastr';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { AngularFireModule } from 'angularfire2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { NewsModule } from '@news/news.module';
import { DashboardModule } from '@dashboard/dashboard.module';
import { CoreModule } from '@core/core.module';
import { RankedModule } from '@ranked/ranked.module';
import { VodModule } from '@vod/vod.module';
import { GuidesModule } from '@guides/guides.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CustomRouterStateSerializer } from '@core/helpers/RouterState';
import { reducers, metaReducers } from '@core/reducers/index';

import { environment } from '@env/environment';

import { DashboardEffects } from '@dashboard/effects/dashboard.effects';
import { RankingEffects } from '@ranked/effects/ranking.effects';
import { VodsEffects } from '@vod/effects/vods.effects';


const StoreDevTools = !environment.production ? StoreDevtoolsModule.instrument() : [];
const RouterProvider = { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer };
// const graphqlEndpoint = !environment.production ? 'http://backendtoxic.local/graphql' : 'https://backend.toxictoast.de/graphql';
const graphqlEndpoint = 'https://backend.toxictoast.de/graphql';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    EffectsModule.forRoot([ DashboardEffects, RankingEffects, VodsEffects]),
    StoreDevTools,
    ReactiveFormsModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    AppRoutingModule,
    CoreModule,
    NewsModule,
    DashboardModule,
    RankedModule,
    VodModule,
    GuidesModule,
    NgbModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    RouterProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      link: httpLink.create({ uri: graphqlEndpoint }),
      cache: new InMemoryCache()
    });
  }

}
