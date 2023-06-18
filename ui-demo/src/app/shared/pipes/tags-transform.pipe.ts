import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tagsTransform'
})
export class TagsTransformPipe implements PipeTransform {

  transform(tags: string[], ...args: unknown[]): string[] {

    // transforming tag size according to the requirements

    const tagsToTransform = [...tags]

    return tagsToTransform.map((tag)=>{
      
      if(tag.length >= 8) {
        return tag.slice(0, 8).concat('...')
      }
      return tag
    });
  }

}
