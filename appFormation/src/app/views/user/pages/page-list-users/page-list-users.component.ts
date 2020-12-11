import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';
import { RoleUser } from 'src/app/shared/enums/role-user.enum';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-page-list-users',
  templateUrl: './page-list-users.component.html',
  styleUrls: ['./page-list-users.component.scss']
})
export class PageListUsersComponent implements OnInit {

  public headers: string[];
  // public users: Observable<User[]>;
  public users: User[] = [];
  public userConnected: User;
  public btnAdd: BtnI;
  public title: string;
  public subtitle: string;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getById(localStorage.id).subscribe(data => {
      this.userConnected = data;
      if (this.userConnected.role === RoleUser.ADMIN) {
        this.userService.getAll().subscribe(data => this.users = data);
      } else {
        this.users.push(this.userConnected);
      }

    });
    this.headers = ['Username', 'Role'];
    this.btnAdd = {label: 'Add', route:'add'};
    this.title = 'Users';
    this.subtitle = 'All users';
  }

}
