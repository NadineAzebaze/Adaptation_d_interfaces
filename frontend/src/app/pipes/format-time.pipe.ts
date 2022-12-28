import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {

    const result = new Date(value * 1000).toISOString().substr(14, 5);
    console.log("converting", value, "to", result);
    return result;
  }

}
