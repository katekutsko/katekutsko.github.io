import { AbstractControl, ValidatorFn } from '@angular/forms';
import { UserService } from '../service/user.service';

export function existingLoginValidator(userService: UserService): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return userService.findUserByLogin(control.value)
      ? {
          existingLogin: {
            message: 'User with this login already exists',
          },
        }
      : null;
  }
};
