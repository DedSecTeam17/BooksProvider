import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {UserSessionService} from '../../services/user-session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
    registerForm: FormGroup;
    get f() { return this.registerForm.controls; }

    submitted = false;

  err:null;
  constructor(private  router : Router ,private formBuilder: FormBuilder, private  authService: AuthService,private  session:UserSessionService) { }


  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          email: ['',[ Validators.required,Validators.email]],
          password: ['', [Validators.required,Validators.minLength(6)]],
      });
  }



    onSubmit() {
      console.log(this.registerForm)

        this.submitted = true;
       this.authService.SingIn(this.registerForm.value).subscribe((respone)=>{
           console.log(respone)
           this.submitted = false;
           this.session.setAccessToken(respone['user_token']);
           this.session.saveAccessToken();
           this.router.navigateByUrl('/home');

       },(err)=>{
           this.err=err.error;
           console.log(this.err)
           this.submitted = false;

       })
    }

}
