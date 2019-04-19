import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  fileToUpload: File = null;
  private  image_path : string;
  private  upload_image:boolean=false;
  private  load_image_path=true;
  private  user_name:string;

  constructor(private  profileService : ProfileService) { }

  ngOnInit() {
    this.profileService.getProfileDate().subscribe((respone) => {
      console.log(respone['profile'].profile_image_path)
      this.user_name=respone['name'];
      if ( respone['profile'].profile_image_path===undefined){
        this.image_path = "https://via.placeholder.com/600/#f2f1ef";
      } else {
        this.image_path = respone['profile'].profile_image_path;
      }
      this.load_image_path=false;
    }, (err) => {
      console.log(err);
      this.load_image_path=false;

    });



  }


  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);

    if (this.fileToUpload!==undefined){
      this.upload_image=true;
      this.profileService.uploadProfileImage(this.fileToUpload).subscribe((response)=>{
        this.upload_image=false;
        this.image_path=response['image_path'];
        console.log(this.image_path)
        console.log(response)
      },(err)=>{
        this.upload_image=false;
        console.log(err)
      })
    }
    console.log(this.fileToUpload)
  }
}
