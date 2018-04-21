import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OverwatchRoles } from '@core/helpers/Roles';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  roles = [];
  @Output() goToLogin = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
    this.roles.push(OverwatchRoles.ROLE_DPS);
    this.roles.push(OverwatchRoles.ROLE_FLEX);
    this.roles.push(OverwatchRoles.ROLE_SUPPORT);
    this.roles.push(OverwatchRoles.ROLE_TANK);
  }

}
