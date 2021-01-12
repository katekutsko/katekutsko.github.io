import { AbstractControl } from '@angular/forms';

export function passwordValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const regexp: RegExp = new RegExp('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(.){8,}');
  const matches = regexp.test(control.value);
  return matches
    ? null
    : {
        weakPassword: {
          message:
            'At least 1 uppercase character, 1 lowercase character and 1 digit',
        },
      };
}
