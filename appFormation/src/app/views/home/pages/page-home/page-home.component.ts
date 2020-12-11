import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {

  // public test: string;
  public formLogin: FormGroup;
  public user: User = new User();

  constructor(
    private formBuilder: FormBuilder,
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username: [this.user.username, Validators.required],
      password: [this.user.password, Validators.required]
    })
  }

  public login(): void {
    this.user = this.formLogin.value;
    this.userService.getByUsernameAndPassword(this.user).subscribe(datas => {
      if (datas.id) {
        this.user = datas;
        localStorage.id = this.user.id;
        this.router.navigate(['/orders']);
      }
    })
  }

}
