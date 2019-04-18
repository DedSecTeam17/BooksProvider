import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {UserSessionService} from './user-session.service';

@Injectable({
  providedIn: 'root'
})
export class BeforeLoggedInGuardService implements  CanActivate{

  constructor(private  session : UserSessionService,private  router : Router) { }

  // great  example password reset
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.session.isAuth()==false){
      return true;
    } else {

      this.router.navigate(['/home'], {
        queryParams: {
          return: state.url
        }
      });

      return false;

    }
  }
}
