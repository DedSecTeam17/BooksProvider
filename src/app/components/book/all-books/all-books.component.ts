import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})

export class AllBooksComponent implements OnInit {



  books=[
      {book:1},
      {book:2},
      {book:3},
      {book:4},
      {book:5},
      {book:6},
      {book:7},
  ];
  constructor(private  router : Router) { }
    selected = 5;
    hovered = 0;
    readonly = true;
  ngOnInit() {
  }


  showBookDetail(book_id){
      this.router.navigateByUrl(`/book/show/${book_id}`);
  }


    toUpdate(){
    this.router.navigateByUrl('/book/update');
    }
}
