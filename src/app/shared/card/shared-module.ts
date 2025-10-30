import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from './card';

@NgModule({
  declarations: [Card],
  exports: [Card],
  imports: [
    CommonModule
  ]

})
export class SharedModule { }
