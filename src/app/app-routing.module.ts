import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {HomeComponent} from './components/home/home.component';
import {NotFoundComponentComponent} from './components/not-found-component/not-found-component.component';
import {BookComponent} from './components/book/book.component';
import {ProfileComponent} from './components/profile/profile.component';
import {NotificationsComponent} from './components/notifications/notifications.component';
import {OrderComponent} from './components/order/order.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {AddBookComponent} from './components/book/add-book/add-book.component';
import {AllBooksComponent} from './components/book/all-books/all-books.component';
import {UpdateBookComponent} from './components/book/update-book/update-book.component';
import {UpdateProfileComponent} from './components/profile/update-profile/update-profile.component';
import {ProfileDataComponent} from './components/profile/profile-data/profile-data.component';
import {ShowOrderComponent} from './components/order/show-order/show-order.component';
import {AllOrdersComponent} from './components/order/all-orders/all-orders.component';
import {ShowBookComponent} from './components/book/show-book/show-book.component';
import {ChatComponent} from './components/notifications/chat/chat.component';
import {AuthGuardService} from './services/auth-guard.service';
import {BeforeLoggedInGuardService} from './services/before-logged-in-guard.service';
import {SignPasswordResetRequestComponent} from './components/sign-password-reset-request/sign-password-reset-request.component';
import {SignPasswordResetResponseComponent} from './components/sign-password-reset-response/sign-password-reset-response.component';

const routes: Routes = [
    {
      path:'sign_in',component:SignInComponent,canActivate:[BeforeLoggedInGuardService]
    },
    {
        path:'sign_up',component:SignUpComponent,canActivate:[BeforeLoggedInGuardService]
    },
    //change_password
    {
        path:'password_reset',component:SignPasswordResetRequestComponent,canActivate:[BeforeLoggedInGuardService]
    },
    {
        path:'change_password',component:SignPasswordResetResponseComponent,canActivate:[BeforeLoggedInGuardService]
    },
    {
        path:'home',component:HomeComponent,canActivate: [AuthGuardService]
    },
    {
        path:'book',component:BookComponent,children:[
            {
                path:'create',component:AddBookComponent
            },
            {
                path:'index',component:AllBooksComponent
            },
            {
                path:'update/:book_id',component:UpdateBookComponent
            },
            {
                path:'show/:book_id',component:ShowBookComponent
            }
        ],canActivate: [AuthGuardService]

    },
    {
        path:'profile',component:ProfileComponent,
        children:[
            {
                path:'update',component:UpdateProfileComponent
            },
            {
                path:'index',component:ProfileDataComponent
            }
        ],canActivate: [AuthGuardService]
    },
    {
        path:'notification',component:NotificationsComponent,canActivate: [AuthGuardService],
        children:[
            {
                path:'chat/:notification_id',component:ChatComponent
            }
        ]
    },
    {
        path:'order',component:OrderComponent,canActivate: [AuthGuardService],
        children:[
            {
                path:'index',component:AllOrdersComponent
            },
            {
                path:'show/:order_id',component:ShowOrderComponent
            }
        ]
    },
    { path: '', redirectTo: 'sign_in', pathMatch: 'full' },
    { path: '**', component: NotFoundComponentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
