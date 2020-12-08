import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'days2'
})
export class Days2Pipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if (value) {
      if (value > 1) {
        return `${value} jours`;
      }
      return `${value} jour`;
    }
    return null;
  }

}
