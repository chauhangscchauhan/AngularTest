import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'regex'
})

export class RegexPipe implements PipeTransform {

  transform(value: any, words: boolean) {

    if (value) {
      var val = value.match(/(["])(?:(?=(\\?))\2.)*?\1/)
    }
    return val[0].replace(/"/g,'');
  }

}
