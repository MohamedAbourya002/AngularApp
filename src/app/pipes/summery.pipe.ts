import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summery'
})
export class SummeryPipe implements PipeTransform {

  transform(value: string , limit:any) {
    
    if(!value) return null;

      let actualLimit = (limit) ?limit : "20";
    return value.substring(0,actualLimit)+ '...';
  }

}
