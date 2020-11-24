import { AbstractControl } from '@angular/forms';

export function alphanumericValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const regexp: RegExp = new RegExp('[a-zA-Z0-9]');
  const matches = regexp.test(control.value);
  return matches
    ? null
    : { forbiddenChars: { message: 'Only alphanumeric symbols are allowed' } };
}
