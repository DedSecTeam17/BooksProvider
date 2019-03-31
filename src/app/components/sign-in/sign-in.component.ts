import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
  constructor(private formBuilder: FormBuilder) { }





  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          email: ['',[ Validators.required,Validators.email]],
          password: ['', [Validators.required,Validators.minLength(6)]],
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
