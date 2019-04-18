import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {UserSessionService} from '../../services/user-session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

    err : string;
    registerForm: FormGroup;
    submitted = false;
    constructor(private formBuilder: FormBuilder,private  authService : AuthService,private  session : UserSessionService, private  router : Router) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            email: ['',[ Validators.required,Validators.email]],
            name: ['',[ Validators.required]],
            password: ['', [Validators.required,Validators.minLength(6)]],
            password_confirm:['', [Validators.required,Validators.minLength(6)]],
        });
    }

    get f() { return this.registerForm.controls; }


    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {

            return;
        }

        this.authService.signUp(this.registerForm.value).subscribe((respone)=>{
            console.log(respone)
            this.submitted = false;
            this.router.navigateByUrl('/sign_in');

        },(err)=>{
            this.err=err.error;
            console.log(this.err)
            this.submitted = false;

        })
    }

}
