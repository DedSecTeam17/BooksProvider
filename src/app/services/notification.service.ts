import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MainConfigService} from './main-config.service';
import {UserSessionService} from './user-session.service';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    constructor(private  config: MainConfigService, private  http: HttpClient, private  session: UserSessionService) {
    }

    allNotification(): Observable<any> {
        return this.http.get(this.config.mainEndPoint + `notifications/${this.session.getId()}`, {
            headers: new HttpHeaders().set('Authorization', `jwt ${this.session.getAccessToken()}`)
        });
    }

    showOrder(notification_id): Observable<any> {
        return this.http.get(this.config.mainEndPoint + `notifications/show/${notification_id}`,);
    }

    deleteOrder(notification_id): Observable<Object> {
        return this.http.delete(this.config.mainEndPoint + `notifications/${notification_id}`, {
            headers: new HttpHeaders().set('Authorization', `jwt ${this.session.getAccessToken()}`)

        });
    }
}
