import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent implements OnInit {

  constructor() { }
    showReplayFiled:boolean=true;

  ngOnInit() {
  }

    onReplay(){
        this.showReplayFiled=!this.showReplayFiled;
    }

    onSave(){

        this.showReplayFiled=!this.showReplayFiled;

    }

    onCancel(){
        this.showReplayFiled=!this.showReplayFiled;

    }
}
