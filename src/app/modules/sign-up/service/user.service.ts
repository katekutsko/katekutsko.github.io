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
      this.users.push(user);
  }
}
