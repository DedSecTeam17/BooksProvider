import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import buttons and check box
import {MatNativeDateModule,MatDatepickerModule,MatDialogModule,MatButtonModule, MatCheckboxModule,MatToolbarModule,MatIconModule,MatMenuModule,MatFormFieldModule,MatSelectModule,MatListModule,MatSidenavModule,MatCardModule,MatGridListModule,MatInputModule,MatProgressSpinnerModule,MatProgressBarModule} from '@angular/material';
import { AppToolBarComponent } from './components/app-tool-bar/app-tool-bar.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignPasswordResetRequestComponent } from './components/sign-password-reset-request/sign-password-reset-request.component';
import { SignPasswordResetResponseComponent } from './components/sign-password-reset-response/sign-password-reset-response.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OrderComponent } from './components/order/order.component';
import { BookComponent } from './components/book/book.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddBookComponent } from './components/book/add-book/add-book.component';
import { AllBooksComponent } from './components/book/all-books/all-books.component';
import { UpdateBookComponent } from './components/book/update-book/update-book.component';
import { CreateProfileComponent } from './components/profile/create-profile/create-profile.component';
import { UpdateProfileComponent } from './components/profile/update-profile/update-profile.component';
import { ProfileDataComponent } from './components/profile/profile-data/profile-data.component';
import { AllOrdersComponent } from './components/order/all-orders/all-orders.component';
import { ShowOrderComponent } from './components/order/show-order/show-order.component';
import  {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ShowBookComponent } from './components/book/show-book/show-book.component';
import { ChatComponent } from './components/notifications/chat/chat.component';
import {HttpClientModule} from '@angular/common/http';
import {BookService} from './services/book.service';
import {TimeAgoPipe} from 'time-ago-pipe';

import {NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    AppToolBarComponent,
    SignInComponent,
    SignUpComponent,
    SignPasswordResetRequestComponent,
    SignPasswordResetResponseComponent,
    HomeComponent,
    ProfileComponent,
    OrderComponent,
    BookComponent,
    DashBoardComponent,
    NotFoundComponentComponent,
    SideNavComponent,
    NotificationsComponent,
    AddBookComponent,
    AllBooksComponent,
    UpdateBookComponent,
    CreateProfileComponent,
    UpdateProfileComponent,
    ProfileDataComponent,
    AllOrdersComponent,
    ShowOrderComponent,
    ShowBookComponent,
    ChatComponent,
      TimeAgoPipe,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgbModule,
    HttpClientModule,
    NgbProgressbarModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
