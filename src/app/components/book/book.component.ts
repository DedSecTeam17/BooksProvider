import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {SignUpComponent} from '../sign-up/sign-up.component';
import {AddBookComponent} from './add-book/add-book.component';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(public dialog: MatDialog,private router:Router) { }
    current_route:String;
  ngOnInit() {
    console.log(this.router.url);

  }


    addBook(){
      this.router.navigateByUrl('/book/create');

    }



    onRouteChange(){
     this.current_route=this.router.url;
    }

    // openDialog(): void {
    //     const dialogRef = this.dialog.open(AddBookComponent, {
    //         width: '50%',
    //         height:"70%"
    //     });
    //     dialogRef.afterClosed().subscribe(result => {
    //         console.log('The dialog was closed');
    //     });
    // }
}



