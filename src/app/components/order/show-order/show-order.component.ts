import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css']
})
export class ShowOrderComponent implements OnInit {


  order_id : null;
  constructor(private activeRoute: ActivatedRoute,private  route: Router,private  location: Location) { }

  ngOnInit() {
    this.order_id=this.activeRoute.snapshot.params['order_id'];

  }

    backToMyOrders(){
    this.location.back();

    }



}
