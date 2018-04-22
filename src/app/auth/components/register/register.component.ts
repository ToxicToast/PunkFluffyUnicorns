import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { OverwatchRoles } from '@core/helpers/Roles';
import { FormBuilder, FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  roles = [];
  @Output() goToLogin = new EventEmitter<void>();
  @Output() registerUser = new EventEmitter<any>();
  @Input() state: any;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.roles.push(OverwatchRoles.ROLE_DPS);
    this.roles.push(OverwatchRoles.ROLE_FLEX);
    this.roles.push(OverwatchRoles.ROLE_SUPPORT);
    this.roles.push(OverwatchRoles.ROLE_TANK);
  }

  private createForm(): void {
    this.registerForm = this.fb.group({
      player_roles: [null, Validators.required],
      username: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  userRegister(): void {
    const { value } = this.registerForm;
    this.registerUser.emit(value);
    this.registerForm.reset();
  }
}
