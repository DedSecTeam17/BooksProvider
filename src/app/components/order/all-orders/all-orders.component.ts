import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {OrderService} from '../../../services/order.service';
import {Order} from '../../../models/Order';






@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {



    private orders : Order[];
  constructor(private  router : Router,private  orderService : OrderService) { }

  ngOnInit() {

      this.orderService.allOrders().subscribe((response)=>{
          this.orders=response;
      },(err)=>{})
  }

    showOrder(id){

    this.router.navigateByUrl(`order/show/${id}`)
    }

}



