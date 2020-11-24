import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { take, map, takeUntil, tap } from 'rxjs/operators';

export function repeatPasswordValidator(
  controlToMatch: AbstractControl
): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null =>
    controlToMatch.value === control.value
      ? null
      : { passwordsDiffer: { message: "Password don't match" } };
}
