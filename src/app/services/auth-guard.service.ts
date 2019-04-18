import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UserSessionService} from './user-session.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements  CanActivate{

  constructor(private  session : UserSessionService,private  router : Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.session.isAuth()) {
      return true;
    } else {
      this.router.navigate(['/sign_in'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }
  }
}
