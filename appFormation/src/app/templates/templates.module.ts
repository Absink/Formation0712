import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitresAComponent } from './titres-a/titres-a.component';
import { TitresBComponent } from './titres-b/titres-b.component';



@NgModule({
  declarations: [TitresAComponent, TitresBComponent],
  imports: [
    CommonModule
  ],exports: [
    TitresAComponent,
    TitresBComponent
  ]
})
export class TemplatesModule { }
