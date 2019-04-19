import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../../services/profile.service';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.css']
})
export class ProfileDataComponent implements OnInit {

  private  load_main_profile_data : boolean=false;
  private  profile_data:Object;

  constructor(private  profileService : ProfileService) { }

  ngOnInit() {

    this.profileService.getProfileDate().subscribe((response)=>{
      this.load_main_profile_data=true;
      this.profile_data=response;
      console.log(response)
    },(err)=>{
      console.log(err.error)
      this.load_main_profile_data=true;


    })
  }

}
