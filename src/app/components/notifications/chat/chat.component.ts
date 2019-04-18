import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit,  AfterViewChecked  {

    @ViewChild('scrollBox') private scrollBox: ElementRef;

    messages=[
        {author: "asdasd",message: "asdasd"},
        {author: "asdasd",message: "asdasd"},
        {author: "asdasd",message: "asdasd"},
        {author: "asdasd",message: "asdasd"},
        {author: "asdasd",message: "asdasd"},
        {author: "asdasd",message: "asdasd"},       {author: "asdasd",message: "asdasd"},
        {author: "asdasd",message: "asdasd"},
        {author: "asdasd",message: "asdasd"},       {author: "asdasd",message: "asdasd"},
        {author: "asdasd",message: "asdasd"},
        {author: "asdasd",message: "asdasd"},       {author: "asdasd",message: "asdasd"},
        {author: "asdasd",message: "asdasd"},
        {author: "asdasd",message: "asdasd"},       {author: "asdasd",message: "asdasd"},
        {author: "asdasd",message: "asdasd"},
        {author: "asdasd",message: "asdasd"},
    ];
  constructor() { }

  ngOnInit() {
  }

    ngAfterViewChecked(): void {
        this.scrollToBottom();
    }


    private scrollToBottom(): void {
        try {
            this.scrollBox.nativeElement.scrollTop = this.scrollBox.nativeElement.scrollHeight;
        } catch(err) {
            console.log(err);
        }
    }
}
