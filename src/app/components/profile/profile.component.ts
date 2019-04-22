import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../services/profile.service';
import {Router} from '@angular/router';

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

  progress = { loaded : Number , total : Number };
  private  total:number=0;
  private  loaded:number=0;
  private  value: number=0;


  constructor(private  profileService : ProfileService,private  router : Router) { }

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
      this.profileService.uploadProfileImage(this.fileToUpload).subscribe((data : any)=>{

        console.log(data);
        if(data.type == 1 && data.loaded && data.total){
          this.loaded=data.loaded;
          this.total=data.total;
          this.value=Math.floor(((this.loaded/this.total)*100));
        }
        else if(data.body){
          console.log("Data Uploaded");
          console.log(data.body);
          this.upload_image=false;
          this.total=0;
          this.total=0;
          this.value=0;

          this.image_path=data.body['image_path'];

        }
      },(err)=>{
        this.upload_image=false;
        console.log(err)
      })
    }
    console.log(this.fileToUpload)
  }
}
