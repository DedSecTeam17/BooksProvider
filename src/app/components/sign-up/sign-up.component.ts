import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

    registerForm: FormGroup;
    submitted = false;
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            email: ['',[ Validators.required,Validators.email]],
            name: ['',[ Validators.required]],
            password: ['', [Validators.required,Validators.minLength(6)]],
            password_confirm:['', [Validators.required,Validators.minLength(6)]],
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
