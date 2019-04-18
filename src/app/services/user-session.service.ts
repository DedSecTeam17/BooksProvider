import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {

  constructor() { }

  accessToken:string;



  setAccessToken(access_token) {
   this.accessToken=access_token;
  }

  saveAccessToken() {
    localStorage.setItem('access_token',  this.accessToken);
  }

  deleteAccessToken() {
    localStorage.setItem('access_token', '');
  }

  getAccessToken(): string {
   return  localStorage.getItem('access_token');
  }


  isAuth(): boolean {
    return this.getAccessToken() != '';
  }








}
