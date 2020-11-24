import { Injectable } from '@angular/core';
import { IUser } from 'src/app/interface/iuser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: IUser[] = [];

  constructor() {}

  findUserByLogin(login: string) {
    return this.users.find((user) => user.login === login);
  }

  addUser(user: IUser) {
    //TODO add asynchronous validator instead of it
    const userWithSameLogin = this.users.find(
      (existingUser) => existingUser.login === user.login
    );

    if (!userWithSameLogin) {
      this.users.push(user);
      return true;
    }
    return false;
  }
}
