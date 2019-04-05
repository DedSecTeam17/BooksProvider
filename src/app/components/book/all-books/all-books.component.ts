import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})

export class AllBooksComponent implements OnInit {

  constructor(private  router : Router) { }

  ngOnInit() {
  }


    toUpdate(){
    this.router.navigateByUrl('/book/update');
    }
}
