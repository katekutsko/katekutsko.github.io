import { Injectable } from '@angular/core';
import { IUser } from '../interface/iuser';
import { UserService } from '../modules/sign-up/service/user.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loggedInUser: IUser;
  redurectUrl: string;

  constructor(private userService: UserService) {}

  login(login: string, password: string) {
    const user = this.userService.findUserByLogin(login);

    if (user && user.password === password) {
      this.loggedInUser = user;
    }
  }

  logout() {
    this.loggedInUser = null;
  }
}
