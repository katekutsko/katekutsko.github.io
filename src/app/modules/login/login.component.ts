import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/modules/login/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login: string = '';
  password: string = '';
  errorMessage: string;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  logIn() {
    if (this.loginService.login(this.login, this.password)) {
      this.router.navigate([this.loginService.redurectUrl]);
    } else {
      this.errorMessage = 'Login or password is incorrect';
    }
  }

  resetError() {
    this.errorMessage = null;
  }
}
