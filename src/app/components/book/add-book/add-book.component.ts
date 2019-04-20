import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../../../services/book.service';

@Component({
    selector: 'app-add-book',
    templateUrl: './add-book.component.html',
    styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {


    book = {
        book_image: null
    };


    book_added: boolean = false;


    addBookForm: FormGroup;
    submitted = false;

    constructor(private  router : Router ,private formBuilder: FormBuilder, private  activeRoute: ActivatedRoute, private  bookService: BookService) {
    }

    ngOnInit() {


        this.addBookForm = this.formBuilder.group(
            {
                title: ['', Validators.required],
                author: ['', Validators.required],
                category_id: ['', Validators.required],
                publish_at: ['', Validators.required],
                price: ['', [Validators.required]],
            });
    }

    //title:asdsad
    // author:melamin400@yahoo.com
    // book_image_path:mohamed
    // publish_at:test
    // category_id:test
    // price:12
    get f() {
        return this.addBookForm.controls;
    }


    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.addBookForm.invalid) {

            return;
        }


        console.log(this.addBookForm.value);
        this.bookService.addBook(this.addBookForm.value).subscribe(
            (response) => {
                console.log(response);
                this.bookService.uploadBookImage(this.book.book_image, response['_id']).subscribe(
                    (response) => {
                        this.submitted=false;
                        this.router.navigateByUrl('book/index');
                        console.log(response);
                    },
                    (err) => {
                        this.submitted=false;

                        console.log(err);
                    }
                );
            },
            (err) => {
                console.log(err);
            }
        );
    }




    handleFileInput(files: FileList) {
        this.book.book_image = files.item(0);

    }


}
