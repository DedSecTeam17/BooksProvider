import {Injectable} from '@angular/core';
import {MainConfigService} from './main-config.service';
import {config, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {


    constructor(private  config: MainConfigService, private  http: HttpClient) {
    }


    signUp(form_data): Observable<Object> {
        return this.http.post(this.config.mainEndPoint + 'users', form_data);
    }


    SingIn(form_data): Observable<Object> {
        return this.http.post(this.config.mainEndPoint + 'auth', form_data);
    }

    GetUserData(token): Observable<Object> {
        return this.http.get(this.config.mainEndPoint + 'users', {
            headers: new HttpHeaders().set('Authorization', `jwt ${token}`),
        });
    }


    PasswordReqest(form_data): Observable<Object> {
        return this.http.post(this.config.mainEndPoint + 'users/password_reset', form_data);

    }

    PasswordChange(form_data,reset_token): Observable<Object> {
        return this.http.post(`https://serene-wave-76375.herokuapp.com/api/users/password_change/${reset_token}`, form_data);
    }


}
