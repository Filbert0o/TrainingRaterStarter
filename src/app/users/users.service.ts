import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

export interface IUser {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  number: string;
}

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  getUsers(): Observable<IUser> {
    return this.http.get<IUser>('http://localhost:3000/users');
  }
}
