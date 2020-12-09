import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TotalPipe } from './pipes/total.pipe';
import { DaysPipe } from './pipes/days.pipe';
import { Days2Pipe } from './pipes/days2.pipe';
import { ColorStateDirective } from './directives/color-state.directive';
import { ColorDayDirective } from './directives/color-day.directive';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TableLightComponent, TotalPipe, DaysPipe, Days2Pipe, ColorStateDirective, ColorDayDirective, BtnComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TableLightComponent,
    TotalPipe,
    Days2Pipe,
    ColorStateDirective,
    ColorDayDirective,
    BtnComponent
  ]
})
export class SharedModule { }
