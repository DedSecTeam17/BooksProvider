import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-app-tool-bar',
  templateUrl: './app-tool-bar.component.html',
  styleUrls: ['./app-tool-bar.component.css']
})
export class AppToolBarComponent implements OnInit {

  constructor() { }
    @Output() onToggle:EventEmitter<null> =new EventEmitter<null>();
  ngOnInit() {
  }


    toggle(){
    this.onToggle.emit();
    console.log("Toggle");
    }

}
