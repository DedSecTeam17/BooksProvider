import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../../../services/book.service';
import {ReviewService} from '../../../services/review.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-show-book',
    templateUrl: './show-book.component.html',
    styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent implements OnInit {


    private book_id: String;
    private book;
    private reviews;
    private current_index: number;
    private current_index_for_replay: number;


    private load_reviews: boolean = true;
    load_book: boolean = true;
    replaySubmitted: boolean = false;
    edtReplaySubmitted: boolean = false;
    private replayForm: FormGroup;
    private editReplayForm: FormGroup;


    private add_replay: boolean = false;

    constructor(private formBuilder: FormBuilder, private activeRoute: ActivatedRoute, private  bookService: BookService, private  reviewService: ReviewService) {
    }

    showReplayFiled: boolean = true;


    showEditReplayForm(index) {
        this.current_index_for_replay = index;

    }

    ngOnInit() {


        this.book_id = this.activeRoute.snapshot.params['book_id'];
        console.log(this.book_id);
        this.bookService.showBook(this.book_id).subscribe((response) => {
            this.book = response;
            this.load_book = false;
            this.getAllReviews();
        }, (err) => {
            this.load_book = false;
        });


    }


    get getUpdateForm() {
        return this.replayForm.controls;
    }

    get getEditReplayForm() {
        return this.replayForm.controls;
    }


    deleteReview(review_id, replay_id) {
        this.reviewService.deleteReplay(this.book_id, review_id, replay_id).subscribe(
            (response) => {

            },
            (err) => {
                this.getAllReviews();

                console.log(err);

            }
        );
    }

    addReview(review_id) {
        this.reviewService.addReplay(this.book_id, review_id, this.replayForm.value.replay).subscribe(
            (response) => {
                this.getAllReviews();
                console.log(response);
                this.add_replay = false;
            },
            (err) => {
                console.log(err);
                this.add_replay = false;
            }
        );
    }

    getAllReviews() {
        this.reviewService.allReviews(this.book_id).subscribe(
            (response) => {
                this.reviews = response;
                this.load_reviews = false;
                console.log(this.reviews);
                console.log(response);

                this.replayForm = new FormGroup(
                    {
                        replay: new FormControl('', Validators.required),
                    });

                this.editReplayForm = new FormGroup(
                    {
                        replay: new FormControl('', Validators.required),
                    });

            },
            (err) => {
                this.load_reviews = false;
                console.log(err);
            }
        );
    }


    onUpdateReplay(review_id, replay_id) {

        this.edtReplaySubmitted = true;
        // stop here if form is invalid
        if (this.editReplayForm.invalid) {
            return;
        }
        this.current_index_for_replay = null;
        this.updateReplay(review_id, replay_id);
        console.log(this.editReplayForm.value);


    }

    cancelEditReplay() {
        this.current_index_for_replay = null;
    }

    updateReplay(review_id, replay_id) {

        this.reviewService.editReplay(this.book_id, review_id, replay_id, this.editReplayForm.value.replay)
            .subscribe((response) => {
                    console.log(response);
                    this.getAllReviews();
                },
                (err) => {
                    console.log(err);
                });

    }

    onReplay(review_id) {
        console.log(review_id);
        this.add_replay = true;
        console.log(this.replayForm.valid);
        console.log(this.replayForm.value);

        this.replaySubmitted = true;
        // stop here if form is invalid
        if (this.replayForm.invalid) {
            return;
        }
        this.addReview(review_id);


        console.log(this.replayForm.value);
    }

    showReplayFom(e) {
        this.current_index = e;
    }

    onSave() {

        this.showReplayFiled = !this.showReplayFiled;

    }

    onCancel() {
        this.showReplayFiled = !this.showReplayFiled;

    }
}
