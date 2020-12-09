import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PageListUsersComponent } from './pages/page-list-users/page-list-users.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [PageListUsersComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
