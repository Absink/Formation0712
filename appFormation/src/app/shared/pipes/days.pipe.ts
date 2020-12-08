import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../models/order.model';

@Pipe({
  name: 'days'
})
export class DaysPipe implements PipeTransform {

  transform(value: Order, ...args: any[]): string {
    if (value) {
      if (value.nbJours > 1) {
        return `${value.nbJours} jours`;
      }
      return `${value.nbJours} jour`
    }
    return null;
  }

}
