import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {BookService} from '../../../services/book.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})

export class AllBooksComponent implements OnInit {



 private books : any=[];
    constructor(private formBuilder: FormBuilder, private  activeRoute: ActivatedRoute, private  bookService: BookService,private  router : Router) {
    }
    selected = 5;
    hovered = 0;
    readonly = true;
    load_books:boolean=true;
    delete_book:boolean=false;

    ngOnInit() {
      this.getBooks();
  }


  showBookDetail(book_id){
      this.router.navigateByUrl(`/book/show/${book_id}`);
  }
    getBooks(){
        this.bookService.allBook().subscribe((response)=>{
            this.books=response;
            this.load_books=false;
            console.log(this.books)
        },(err)=>{
            console.log(err)
            this.load_books=false;

        });
    }


    deleteBook(id){
        this.delete_book=true;

        this.bookService.deleteBook(id).subscribe((response)=>{
          console.log(response)
          this.getBooks();
          this.delete_book=false;
      },(err)=>{
          console.log(err)
          this.getBooks();
          this.delete_book=false;
      })

    }

    toUpdate(book_id){
    this.router.navigateByUrl('/book/update/'+book_id);
    }
}
