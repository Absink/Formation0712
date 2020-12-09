import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TotalPipe } from './pipes/total.pipe';
import { DaysPipe } from './pipes/days.pipe';
import { Days2Pipe } from './pipes/days2.pipe';



@NgModule({
  declarations: [TableLightComponent, TotalPipe, DaysPipe, Days2Pipe],
  imports: [
    CommonModule
  ],
  exports: [
    TableLightComponent,
    TotalPipe,
    Days2Pipe
  ]
})
export class SharedModule { }
