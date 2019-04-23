import {Component, OnInit} from '@angular/core';
import {NotificationService} from '../../services/notification.service';
import {Notification} from '../../models/Notification';

@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {


    private notifications: Notification[];


    private  load_notificaitons:boolean =true;

    constructor(private  notificationService: NotificationService) {
    }

    ngOnInit() {
        this.getAllNotifications();
    }

    // getAllNotifications
    getAllNotifications() {
        this.notificationService.allNotification().subscribe((response) => {
                this.notifications = response;
                console.log(response)
            this.load_notificaitons=false;

            }
            , (err) => {
                this.load_notificaitons=false;
                console.log(err);
            }
        );

    }

    clear(notification_id){
        this.load_notificaitons=true;

        this.notificationService.deleteOrder(notification_id).subscribe((response)=>{
            this.getAllNotifications();
            console.log(response)
        },(err)=>{
            this.load_notificaitons=false;
            console.log(err)
        })
    }
}
