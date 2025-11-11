import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converToSpaces'
})
export class ConverToSpacesPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(value);
    console.log(args);
    return value.replace(args[0], " "); // replace - with space
  }

}
