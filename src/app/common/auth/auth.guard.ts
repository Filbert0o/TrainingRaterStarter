import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
      private authService: AuthService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
  ): Observable<boolean> {
      return Observable.of(this.authService.isAuthenticated());
  }
}
