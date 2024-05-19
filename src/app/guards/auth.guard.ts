import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGard{

constructor( private authService : AuthService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): MaybeAsync<GuardResult> {
                if (this.authService.isAuthenticated)
                  {
                    return true;
                  }
                 else
                 {
                  this.router.navigateByUrl('/login');
                    return false;
                 }

              }

};
