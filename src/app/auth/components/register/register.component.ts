import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OverwatchRoles } from '@core/helpers/Roles';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  roles = [];
  @Output() goToLogin = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.roles.push(OverwatchRoles.ROLE_DPS);
    this.roles.push(OverwatchRoles.ROLE_FLEX);
    this.roles.push(OverwatchRoles.ROLE_SUPPORT);
    this.roles.push(OverwatchRoles.ROLE_TANK);
  }

  private createForm() {
    this.registerForm = this.fb.group({
      player_roles: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

}
