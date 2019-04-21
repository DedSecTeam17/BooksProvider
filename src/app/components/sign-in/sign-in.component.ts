import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {UserSessionService} from '../../services/user-session.service';
import {Router} from '@angular/router';
import {ProfileService} from '../../services/profile.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
    registerForm: FormGroup;
    get f() { return this.registerForm.controls; }

    submitted = false;
    loading=false;

  err:null;
  constructor(private  profileService : ProfileService ,private  router : Router ,private formBuilder: FormBuilder, private  authService: AuthService,private  session:UserSessionService) { }


  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          email: ['',[ Validators.required,Validators.email]],
          password: ['', [Validators.required,Validators.minLength(6)]],
      });
  }



    onSubmit() {
      console.log(this.registerForm)
        this.submitted = true;
        if (!this.registerForm.valid)
            return;

        this.loading=true;
       this.authService.SingIn(this.registerForm.value).subscribe((respone)=>{
           console.log(respone)
           this.loading=false;
           this.session.setAccessToken(respone['user_token']);
           this.session.saveAccessToken();
           this.profileService.getProfileDate().subscribe((response)=>{
               console.log(response['_id'])
               this.session.setId(response['_id']);
               this.session.saveId();

           },(err)=>{
               console.log(err)
           });
           this.router.navigateByUrl('/home');

       },(err)=>{
           this.err=err.error;
           this.loading=false;

           console.log(this.err)
           this.submitted = false;

       })
    }

}
