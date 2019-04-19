import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfileService} from '../../../services/profile.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-update-profile',
    templateUrl: './update-profile.component.html',
    styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

    updateForm: FormGroup;


    submitted = false;
    submittedForPasswordChange=false;
    private load_profile_data: boolean = true;
    private  err;
    private  msg;
    private  status;

    private  password={
        new_password: null,
        old_password:null
    };
    private profile = {
        name: null,
        email: null,
        job: null,
        phone_number: null,
        about: null,


    };

    constructor(private formBuilder: FormBuilder, private  profileService: ProfileService, private  router: Router) {
    }

    ngOnInit() {
        this.updateForm = this.formBuilder.group({
            new_password: ['',[ Validators.required,Validators.minLength(6)]],
            old_password: ['', [Validators.required,Validators.minLength(6)]],
        });


        this.profileService.getProfileDate().subscribe((respone) => {
            this.load_profile_data = false;
            this.profile.name = respone['name'];
            this.profile.email = respone['email'];
            this.profile.job = respone['profile'].job;
            this.profile.phone_number = respone['profile'].phone_number;
            this.profile.about = respone['profile'].about;


        }, (err) => {
            this.load_profile_data = false;
            console.log(err);
        });

    }

    get f() { return this.updateForm.controls; }



    onSubmit() {
        console.log(this.profile);
        this.submitted = true;
        // stop here if form is invalid

        this.profileService.updateProfileData(this.profile).subscribe((respone) => {
            console.log(respone);
            this.msg="Profile changed successfully";
            this.status=200;
            this.submitted = false;

        }, (err) => {
            console.log(err);
            this.err=err.error;
            this.submitted = false;


        });
    }

    onSubmitPasswordChange(){
        this.submittedForPasswordChange = true;
        console.log(this.updateForm.value)
        if (this.updateForm.invalid) {
            return;
        }


        this.profileService.updatePassword(this.updateForm.value).subscribe((response)=>{

            this.msg=response['message'];
            this.status=response['status'];
            this.submittedForPasswordChange = false;

        },(err)=>{
            this.submittedForPasswordChange = false;

            this.err=err.message;
        })


    }
}
