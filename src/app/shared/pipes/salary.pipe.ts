import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salary',
})
export class SalaryPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    let valueString = value + '';
    if (valueString.length > 3) {
      valueString =
        valueString.substr(0, valueString.length - 3) +
        '.' +
        valueString.substring(valueString.length - 3);
    }
    return valueString + ' $';
  }
}
