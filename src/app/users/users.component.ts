import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService, IUser } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit, OnDestroy {
  users: IUser;
  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log('Init in Users');
    this.userService.getUsers()
      .subscribe(
        (users) => this.users = users
      );
  }

  ngOnDestroy(): void {
    console.log('Destroy on Users');
  }
}
