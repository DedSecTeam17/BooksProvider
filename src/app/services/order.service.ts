import { Injectable } from '@angular/core';
import {MainConfigService} from './main-config.service';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {UserSessionService} from './user-session.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


  constructor(private  config: MainConfigService, private  http: HttpClient,private  session:UserSessionService) {
  }


  allOrders() : Observable<any>{
    return this.http.get(this.config.mainEndPoint + `orders/provider/${this.session.getId()}`, );

  }

  showOrder(order_id) : Observable<any>{
    return this.http.get(this.config.mainEndPoint + `orders/${order_id}`, );

  }

  updateOrder(order_id,state) : Observable<Object>{
    return this.http.put(this.config.mainEndPoint + `orders/${order_id}`, {State:state},{
      headers: new HttpHeaders().set('Authorization', `jwt ${this.session.getAccessToken()}`)
    });

  }

  deleteOrder(order_id)  : Observable<Object>{
    return this.http.delete(this.config.mainEndPoint + `orders/${order_id}`,{
      headers: new HttpHeaders().set('Authorization', `jwt ${this.session.getAccessToken()}`)

    });
  }


}
