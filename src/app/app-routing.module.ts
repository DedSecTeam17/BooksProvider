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

const routes: Routes = [
    {
      path:'sign_in',component:SignInComponent
    },
    {
        path:'sign_up',component:SignUpComponent
    },
    {
        path:'home',component:HomeComponent
    },
    {
        path:'book',component:BookComponent
    },
    {
        path:'profile',component:ProfileComponent
    },
    {
        path:'notification',component:NotificationsComponent
    },
    {
        path:'order',component:OrderComponent
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', component: NotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
