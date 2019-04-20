import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserSessionService {

    constructor() {
    }

    accessToken: string;
    id: string;



    setAccessToken(access_token) {
        this.accessToken = access_token;
    }

    setId(id) {
        this.id = id;
    }


    saveAccessToken() {
        localStorage.setItem('access_token', this.accessToken);


    }

    saveId(){
        localStorage.setItem('id', this.id);
    }

    deleteAccessToken() {
        localStorage.setItem('access_token', '');
        localStorage.setItem('id', '');

    }

    getAccessToken(): string {
        return localStorage.getItem('access_token');
    }

    getId(): string {
        return localStorage.getItem('id');
    }



    isAuth(): boolean {
        return this.getAccessToken() != '';
    }


}
