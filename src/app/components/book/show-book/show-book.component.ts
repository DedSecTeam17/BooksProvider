import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../../../services/book.service';

@Component({
    selector: 'app-show-book',
    templateUrl: './show-book.component.html',
    styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent implements OnInit {


    private book_id: String;
    private  book;

    constructor(private activeRoute: ActivatedRoute, private  bookService: BookService) {
    }

    showReplayFiled: boolean = true;

    ngOnInit() {
        this.book_id = this.activeRoute.snapshot.params['book_id'];
        console.log(this.book_id);
        this.bookService.showBook(this.book_id).subscribe((response) => {
            this.book=response;
            console.log(response);
        }, (err) => {

        });
    }

    onReplay() {
        this.showReplayFiled = !this.showReplayFiled;
    }

    onSave() {

        this.showReplayFiled = !this.showReplayFiled;

    }

    onCancel() {
        this.showReplayFiled = !this.showReplayFiled;

    }
}
