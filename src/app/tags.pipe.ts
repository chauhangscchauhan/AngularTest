import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tags'
})

export class TagsPipe implements PipeTransform {

  transform(value: any, words: boolean) {

    if (value) {
      var val = value.split(" ");
      var result = val.slice(0,5);
      var result = result.join(", ");
    }
    return result;
  }

}
