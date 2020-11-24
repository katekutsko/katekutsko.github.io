import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interface/iuser';
import { LoginService } from 'src/app/modules/login/service/login.service';
import { UserService } from './service/user.service';
import { alphanumericValidator } from './validators/alphanumeric.directive';
import { passwordValidator } from './validators/password.directive';
import { repeatPasswordValidator } from './validators/repeat-password.directive';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  userData: FormGroup = this.formBuilder.group({
    login: ['', [Validators.required, alphanumericValidator]],
    firstName: ['', [Validators.required, alphanumericValidator]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, passwordValidator]],
    repeatPassword: [''],
    address: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userData.controls.repeatPassword.setValidators([
      Validators.required,
      repeatPasswordValidator(this.userData.controls.password)
    ]);
  }

  submit() {
    const user: IUser = this.userData.value;

    if (this.userService.addUser(user)) {
      this.loginService.login(user.login, user.password);
      this.router.navigate(['/home']);
    }
  }
}
