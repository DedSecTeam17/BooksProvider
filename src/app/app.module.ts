import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import buttons and check box
import {MatButtonModule, MatCheckboxModule,MatToolbarModule,MatIconModule,MatMenuModule,MatFormFieldModule,MatSelectModule,MatListModule,MatSidenavModule,MatCardModule,MatGridListModule,MatInputModule,MatProgressSpinnerModule,MatProgressBarModule} from '@angular/material';
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
      MatProgressBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
