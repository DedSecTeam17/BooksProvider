import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {UserSessionService} from '../../services/user-session.service';

@Component({
  selector: 'app-sign-password-reset-request',
  templateUrl: './sign-password-reset-request.component.html',
  styleUrls: ['./sign-password-reset-request.component.css']
})
export class SignPasswordResetRequestComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  err:null;
  message : string;

  constructor(private  router : Router ,private formBuilder: FormBuilder, private  authService: AuthService,private  session:UserSessionService) { }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['',[ Validators.required,Validators.email]],
    });
  }

  get f() { return this.registerForm.controls; }


  onSubmit() {
    console.log(this.registerForm)

    this.submitted = true;
    this.authService.PasswordReqest(this.registerForm.value).subscribe((respone)=>{
      console.log(respone)
      // this.router.navigateByUrl('/sign_in');
      this.message="Check your email to reset password";
      this.submitted = false;

    },(err)=>{
      this.err=err.error;
      console.log(this.err)
      this.submitted = false;

    })
  }

}
