import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from '@auth/auth-routing.module';
import { AuthContainerComponent } from '@auth/containers/auth-container/auth-container.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [
    AuthContainerComponent,
    RegisterComponent,
    LoginComponent
  ]
})
export class AuthModule { }
