import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (state.url.indexOf('auth') !== -1) {
      if (this.auth.isAuthenticated()) {
        this.auth.redirectToPrevStep();
        return false;
      } else {
        return true;
      }
    } else {
      if (this.auth.isAuthenticated()) {
        return true;
      } else {
        this.auth.redirectToLogin(state.url);
        return false;
      }
    }
  }

}
