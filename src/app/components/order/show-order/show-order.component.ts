import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import {OrderService} from '../../../services/order.service';
import {Order} from '../../../models/Order';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css']
})
export class ShowOrderComponent implements OnInit {


  order_id : null;
  order : Order;
  private  load_order : boolean=true;
  constructor(private activeRoute: ActivatedRoute,private  route: Router,private  location: Location,private  orderService : OrderService) { }

  ngOnInit() {
    this.order_id=this.activeRoute.snapshot.params['order_id'];
    this.orderService.showOrder(this.order_id)
        .subscribe((response)=>{
          this.order=response;
          this.load_order=false;
          console.log(this.order)
        },
            (err)=>{
          console.log(err)
              this.load_order=false;

            });


  }

    backToMyOrders(){
    this.location.back();

    }

  rejectOrder(order_id){
    this.load_order=true;

    this.orderService.deleteOrder(order_id).subscribe((repsonse)=>{
      console.log(repsonse)
      this.backToMyOrders();
      this.load_order=false;

    },(err)=>{
      this.load_order=false;

      console.log(err)
    })

  }

  acceptOrder(order_id){

    this.load_order=true;

    this.orderService.updateOrder(order_id,"accepted").subscribe((repsonse)=>{
      this.load_order=false;
      this.backToMyOrders();

    },(err)=>{
      this.load_order=false;

      console.log(err)
    })
  }



}
