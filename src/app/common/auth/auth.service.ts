import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
  ) { }

  isAuthenticated(): boolean {
      return false;
  }

}
