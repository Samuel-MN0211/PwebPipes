import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numeroPipe'
})
export class NumeroPipe implements PipeTransform {

  transform(value: string | null | undefined, ...args: unknown[]) {
    if(!value){
      return value;
    }

    if (value.length === 8) {
      return `${value.substring(0, 4)}-${value.substring(4)}`;
    } else if (value.length === 10) {
      return `(${value.substring(0, 2)}) ${value.substring(2, 6)}-${value.substring(6)}`;
    } else if (value.length === 11) {
      return `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7)}`;
    } else {
      return value; 
    }
  }
}
