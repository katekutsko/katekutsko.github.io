import { FormControl } from '@angular/forms';
import { alphanumericValidator } from './alphanumeric.directive';

describe('alphanumericValidator', () => {

    const control = new FormControl('input');

    it('should return no errors for alphanumeric expression', () => {
        control.setValue('abc123');

        expect(alphanumericValidator(control)).toBeNull();
    });

    it('should return error for expression with special symbols', () => {
        control.setValue('abc123!*&?<>');
        
        expect(alphanumericValidator(control)).toEqual({ forbiddenChars: { message: 'Only alphanumeric symbols are allowed' } });
    });
});