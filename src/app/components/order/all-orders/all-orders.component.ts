import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';






@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {

    list=[
        {
          name:'asd'
        },
        {
            name:'asd'
        },{
            name:'asd'
        },{
            name:'asd'
        },{
            name:'asd'
        },{
            name:'asd'
        },{
            name:'asd'
        },{
            name:'asd'
        },{
            name:'asd'
        },
    ];

  constructor(private  router : Router) { }

  ngOnInit() {
  }

    showOrder(i){

    this.router.navigateByUrl(`order/show/${this.list.indexOf(i)}`)
    }

}
