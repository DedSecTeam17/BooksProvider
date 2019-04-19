import { Injectable } from '@angular/core';
import {MainConfigService} from './main-config.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserSessionService} from './user-session.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  constructor(private  config: MainConfigService, private  http: HttpClient,private  session:UserSessionService) {
  }


  getProfileDate() : Observable<Object>{
    return this.http.get(this.config.mainEndPoint + 'users', {
      headers: new HttpHeaders().set('Authorization', `jwt ${this.session.getAccessToken()}`),
    });

  }
  updateProfileData(form_data) : Observable<Object>{
    return this.http.put(this.config.mainEndPoint + 'users/update',form_data, {
      headers: new HttpHeaders().set('Authorization', `jwt ${this.session.getAccessToken()}`),
    });
  }


  uploadProfileImage(image : File) : Observable<Object>{
    const  formData= new FormData();
    formData.append('profile_image',image);
    return this.http.post(this.config.mainEndPoint + 'users/profile/upload_profile_image',formData, {
      headers: new HttpHeaders().set('Authorization', `jwt ${this.session.getAccessToken()}`),
    });

  }


  updatePassword(form_data) : Observable<Object>{
    return this.http.put(this.config.mainEndPoint + 'users/update_password',form_data, {
      headers: new HttpHeaders().set('Authorization', `jwt ${this.session.getAccessToken()}`),
    });
  }



}
