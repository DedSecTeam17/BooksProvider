import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {


    book={
        image: null
    };




    registerForm: FormGroup;
    submitted = false;
    constructor(private formBuilder: FormBuilder,private  activeRoute:ActivatedRoute) { }
  ngOnInit() {


      this.registerForm = this.formBuilder.group(
          {
          title: ['', Validators.required],
          author: ['', Validators.required],
          publish_at: ['', Validators.required],
          category:['', Validators.required],
          price:['', [Validators.required]],
          image:['', Validators.required]
          });
  }
    get f() { return this.registerForm.controls; }


    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {

            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    }




    handelImage(e){
        this.book.image=e.item(0);
        console.log(this.book.image);
    }





}
