import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionIndicator'
})
export class DescriptionIndicatorPipe implements PipeTransform {

  transform(description: string, ...args: unknown[]): string {

    //checking description size and returning respective color to use for the indicator

    if(description.length >= 100 ){
       return 'green'
    } else if(description.length > 50 && description.length < 100){
      return 'yellow'
    } else if (description.length < 50 ){
      return 'red'
    } else {
      return ''
    }

  }

}
