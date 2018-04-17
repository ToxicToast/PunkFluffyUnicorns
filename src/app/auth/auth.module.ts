import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from '@auth/auth-routing.module';
import { AuthContainerComponent } from '@auth/containers/auth-container/auth-container.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [
    AuthContainerComponent
  ]
})
export class AuthModule { }
