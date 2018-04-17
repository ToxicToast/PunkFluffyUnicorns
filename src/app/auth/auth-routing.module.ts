import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthContainerComponent } from '@auth/containers/auth-container/auth-container.component';

const routes: Routes = [
  { path: '', component: AuthContainerComponent, data: { isLogin: true } },
  { path: 'auth/register', component: AuthContainerComponent, data: { isRegister: true } },
  { path: 'auth/lostpassword', component: AuthContainerComponent, data: {isLostPassword: true} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
