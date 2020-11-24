import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILoginForm } from 'src/app/interface/ilogin-form';
import { LoginService } from 'src/app/modules/login/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginModel: ILoginForm = {
    login: '',
    password: '',
  };
  errorMessage : string;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    const { login, password } = this.loginModel;

    if (this.loginService.login(login, password)) {
      this.router.navigate([this.loginService.redurectUrl]);
    } else {
      this.errorMessage = 'Login or password is incorrect';
    }
  }
}
