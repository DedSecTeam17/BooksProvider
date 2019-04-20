import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MainConfigService} from './main-config.service';
import {UserSessionService} from './user-session.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private  config: MainConfigService, private  http: HttpClient,private  session:UserSessionService) {
  }


  allBook() : Observable<Object>{
    return this.http.get(this.config.mainEndPoint + `users/${this.session.getId()}/books`, {
      headers: new HttpHeaders().set('Authorization', `jwt ${this.session.getAccessToken()}`),
    });
  }

  showBook(book_id) : Observable<Object>{
    return this.http.get(this.config.mainEndPoint + `users/${this.session.getId()}/books/${book_id}`, {
      headers: new HttpHeaders().set('Authorization', `jwt ${this.session.getAccessToken()}`),
    });
  }



  addBook(formData) : Observable<Object>{
    return this.http.post(this.config.mainEndPoint + 'users/books',formData, {
      headers: new HttpHeaders().set('Authorization', `jwt ${this.session.getAccessToken()}`),
    });
  }





  uploadBookImage(image : File,book_id) : Observable<Object>{
    const  formData= new FormData();
    formData.append('book_image',image);
    return this.http.post(this.config.mainEndPoint + '/users/books/'+book_id,formData, {
      headers: new HttpHeaders().set('Authorization', `jwt ${this.session.getAccessToken()}`),
    });
  }
  updateBook(formData,book_id) : Observable<Object>{
    return this.http.put(this.config.mainEndPoint + 'users/books/'+book_id,formData, {
      headers: new HttpHeaders().set('Authorization', `jwt ${this.session.getAccessToken()}`),
    });
  }
  deleteBook(book_id) : Observable<Object>{
    return this.http.delete(this.config.mainEndPoint + 'users/books/'+book_id, {
      headers: new HttpHeaders().set('Authorization', `jwt ${this.session.getAccessToken()}`),
    });
  }
  uploadProfileImage(image : File) : Observable<Object>{
    const  formData= new FormData();
    formData.append('profile_image',image);
    return this.http.post(this.config.mainEndPoint + 'users/profile/upload_profile_image',formData, {
      headers: new HttpHeaders().set('Authorization', `jwt ${this.session.getAccessToken()}`),
    });

  }
}
