import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService, IUser } from './users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit, OnDestroy {
  users: IUser;
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('Init in Users');
    this.userService.getUsers()
      .subscribe(
        (users) => this.users = users
      );
  }

  goToAdd(): void {
    this.router.navigate(['users/add']);
  }

  goToEdit(id: number): void {
    this.router.navigate([`users/${id}`]);
  }

  ngOnDestroy(): void {
    console.log('Destroy on Users');
  }
}
