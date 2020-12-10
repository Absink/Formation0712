import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { PageListClientComponent } from './pages/page-list-client/page-list-client.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IconModule } from 'src/app/icon/icon.module';
import { TemplatesModule } from 'src/app/templates/templates.module';


@NgModule({
  declarations: [PageListClientComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    IconModule,
    TemplatesModule
  ]
})
export class ClientModule { }
