import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

    registerForm: FormGroup;
    submitted = false;
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            email: ['',[ Validators.required,Validators.email]],
            name: ['',[ Validators.required]],
            image: [' ',[Validators.required]],
            about_you: [' ',[Validators.required]],
            job: [' ',[Validators.required]],
            phone_number:['', [Validators.required,Validators.minLength(10)]]
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
}
