import { Component, OnInit } from '@angular/core';
import {UserSessionService} from '../../services/user-session.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {


  toggled : boolean=true;
  constructor(private session: UserSessionService,private  router : Router) { }

  ngOnInit() {
  }


  onToggle(){
    this.toggled=!this.toggled;
    console.log(this.toggled);

  }

  logOut(){
    this.session.deleteAccessToken();
  }



}
