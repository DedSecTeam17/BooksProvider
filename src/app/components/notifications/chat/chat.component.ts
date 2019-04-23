import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ChatService} from '../../../services/chat.service';
import {ActivatedRoute} from '@angular/router';
import {Chat} from '../../../models/Chat';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {UserSessionService} from '../../../services/user-session.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

    private customer_id;


    private messages: Chat[];
    chatForm: FormGroup;

    constructor(private  sessionService: UserSessionService, private  chatService: ChatService, private  activeRoute: ActivatedRoute, private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.chatForm = new FormGroup(
            {
                message: new FormControl('', Validators.required)
            });
        this.customer_id = this.activeRoute.snapshot.params['customer_id'];
        this.getAllMessages();
    }


    getController() {
        return this.chatForm.controls;
    }


    getAllMessages() {
        this.chatService.allMesages(this.customer_id).subscribe((response) => {
            console.log(response);
            this.messages = response;
        }, (err) => {
            console.log(err);
        });

    }


    onSend() {
        console.log(this.chatForm.value);
        if (this.chatForm.invalid) {
            return;
        }

        this.sendMessage();

    }


    sendMessage() {

        this.chatService.addMessage({
            provider_id: this.sessionService.getId(),
            customer_id: this.customer_id,
            message: this.chatForm.value.message,
            message_from: 'provider',
            message_to: 'customer',
        }).subscribe((response) => {
            console.log(response);
            this.getAllMessages();
        }, (err) => {
            console.log(err);
        });

    }


    deleteMessage(message_id) {
        console.log(message_id);
        this.chatService.deleteMessage(message_id).subscribe((response) => {
            console.log(response);
            this.getAllMessages();
        }, (err) => {
            console.log(err);
        });
    }


}
