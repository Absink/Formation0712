import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-page-list-users',
  templateUrl: './page-list-users.component.html',
  styleUrls: ['./page-list-users.component.scss']
})
export class PageListUsersComponent implements OnInit {

  public headers: string[];
  public users: User[];
  public btnAdd: BtnI;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.headers = ['Username', 'Role'];
    this.btnAdd = {label: 'Add', route:'add'};
    this.userService.getAll().subscribe(datas => this.users = datas);
  }

}
