import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../../../services/book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {




    private book_id: String;
    private  book;
    private  book_image:File;
    private  upload_image:boolean=false;
    private  msg:string="Click to update book image";


    updateForm: FormGroup;
    submitted = false;
    constructor(private  router : Router ,private formBuilder: FormBuilder ,private activeRoute: ActivatedRoute, private  bookService: BookService) { }
    ngOnInit() {
        this.updateForm = this.formBuilder.group(
            {
                title: ['', Validators.required],
                author: ['', Validators.required],
                category_id: ['', Validators.required],
                publish_at: ['', Validators.required],
                price: ['', [Validators.required]],
            });

        this.book_id = this.activeRoute.snapshot.params['book_id'];
        console.log(this.book_id);
        this.bookService.showBook(this.book_id).subscribe((response) => {
            this.book=response;
            this.updateForm.setValue({
                title:this.book['title'],
                author:this.book['author'],
                category_id:this.book['category_id'],
                publish_at:this.book['publish_at'],
                price:this.book['price']
            });
            console.log(response);
        }, (err) => {

        });


    }
    get f() { return this.updateForm.controls; }







    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.updateForm.invalid) {

            return;
        }

        console.log(this.updateForm.value)

        this.bookService.updateBook(this.updateForm.value,this.book_id).subscribe((response)=>{
            console.log(response)
            this.router.navigateByUrl('book/index')

        },(err)=>{
            console.log(err)
        });

    }

    handleFileInput(files: FileList) {
        this.book_image = files.item(0);
        console.log(this.book_id)

        if (this.book_image!==undefined){
            this.upload_image=true;
            this.bookService.uploadBookImage(this.book_image, this.book['_id']).subscribe(
                (response) => {
                    console.log(response);
                    this.upload_image=false;
                    this.msg="Image updated successfully"

                },
                (err) => {
                    console.log(err);
                    this.upload_image=false;
                    this.msg="Error to upload your image"

                }
            );
        }
    }

}
