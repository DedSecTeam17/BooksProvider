import { Injectable } from '@angular/core';
import {MainConfigService} from './main-config.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserSessionService} from './user-session.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private  config: MainConfigService, private  http: HttpClient, private  session: UserSessionService) {
  }

  allMesages(customer_id): Observable<any> {
    return this.http.get(this.config.mainEndPoint + `chats/provider/${this.session.getId()}/customer/${customer_id}`, {
      headers: new HttpHeaders().set('Authorization', `jwt ${this.session.getAccessToken()}`)
    });
  }

  addMessage(form_data): Observable<any> {
    return this.http.post(this.config.mainEndPoint + `chats`,form_data,{
      headers: new HttpHeaders().set('Authorization', `jwt ${this.session.getAccessToken()}`)
    });
  }

      deleteMessage(message_id): Observable<any> {
    return this.http.delete(this.config.mainEndPoint + `chats/${message_id}`, {
      headers: new HttpHeaders().set('Authorization', `jwt ${this.session.getAccessToken()}`)

    });
  }
}
