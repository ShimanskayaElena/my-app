import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from './authentication.service';
import { User } from '../shared/user/user.model';

@Injectable()
export class AuthGuard implements CanActivate {
  user: User;

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
  ) {}

  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot) {
      this.user = this.authenticationService.get();
         if (this.user.access) {
         // пользователь вошёл на сайт как администратор
             return true;
        } else {
        // пользователь не является администратором поэтому перенаправляется на главную стнаницу с URL-адресом возврата
            this.router.navigate(['/authorization'], { queryParams: { returnUrl: state.url }});
            return false;
        }
    }
}
