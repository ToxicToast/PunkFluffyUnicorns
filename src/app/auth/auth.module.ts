import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { CoreModule } from '@core/core.module';

import { reducers } from '@auth/reducers/auth.reducer';

import { AuthService } from '@auth/services/auth.service';

import { RegisterEffects } from '@auth/effects/register.effects';

import { AuthRoutingModule } from '@auth/auth-routing.module';
import { AuthContainerComponent } from '@auth/containers/auth-container/auth-container.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffects]),
    CoreModule
  ],
  declarations: [
    AuthContainerComponent,
    RegisterComponent,
    LoginComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
