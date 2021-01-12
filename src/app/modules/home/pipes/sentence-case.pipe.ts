import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sentencecase' })
export class SentenceCasePipe implements PipeTransform {
  transform(input: string): string {
    return input.length > 0
      ? input[0].toUpperCase() + input.substr(1).toLowerCase()
      : input;
  }
}
