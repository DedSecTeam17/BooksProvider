import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {UserSessionService} from '../../services/user-session.service';

@Component({
    selector: 'app-sign-password-reset-response',
    templateUrl: './sign-password-reset-response.component.html',
    styleUrls: ['./sign-password-reset-response.component.css']
})
export class SignPasswordResetResponseComponent implements OnInit {

    registerForm: FormGroup;
    submitted = false;
    resetToken: string;

    err: null;
    message : string;

    constructor(private  activeRoute: ActivatedRoute, private  router: Router, private formBuilder: FormBuilder, private  authService: AuthService, private  session: UserSessionService) {
    }


    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            new_password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    get f() {
        return this.registerForm.controls;
    }


    onSubmit() {
        this.activeRoute.queryParams.subscribe((prams) => {
            this.resetToken = prams['token'];
        });
        this.submitted = true;
        this.authService.PasswordChange(this.registerForm.value, this.resetToken).subscribe((respone) => {
            console.log(respone);
            this.submitted = false;
            this.message="Password Changed Successfully";

            this.router.navigateByUrl('/sign_in');

        }, (err) => {
            this.err = err.error;
            console.log(this.err);
            this.submitted = false;

        });
    }


}
