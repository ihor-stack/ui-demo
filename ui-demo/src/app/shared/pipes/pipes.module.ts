import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescriptionIndicatorPipe } from './description-indicator.pipe';
import { TagsTransformPipe } from './tags-transform.pipe';



@NgModule({
  declarations: [
    DescriptionIndicatorPipe,
    TagsTransformPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DescriptionIndicatorPipe,
    TagsTransformPipe,

  ]
})
export class PipesModule { }
