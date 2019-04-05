import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {


  toggled : boolean=true;
  constructor() { }

  ngOnInit() {
  }


  onToggle(){
    this.toggled=!this.toggled;
    console.log(this.toggled);

  }



}
