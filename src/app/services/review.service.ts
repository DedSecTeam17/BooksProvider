import { Injectable } from '@angular/core';
import {MainConfigService} from './main-config.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserSessionService} from './user-session.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private  config: MainConfigService, private  http: HttpClient,private  session:UserSessionService) {
  }



  allReviews(book_id) : Observable<Object>{
    return this.http.get(this.config.mainEndPoint + `users/${this.session.getId()}/books/${book_id}/reviews`,
    );
  }

  addReplay(book_id,review_id,replay){
    return this.http.post(this.config.mainEndPoint +
        `users/${this.session.getId()}/books/${book_id}/reviews/${review_id}/replays`
        ,{
          replay:replay,
          provider_id:this.session.getId()
        }
    );
  }


  deleteReplay(book_id,review_id,replay_id){
    return this.http.delete(this.config.mainEndPoint +
        `users/${this.session.getId()}/books/${book_id}/reviews/${review_id}/replays/${replay_id}`
    );
  }

  editReplay(book_id,review_id,replay_id,replay){
    return this.http.put(this.config.mainEndPoint +
        `users/${this.session.getId()}/books/${book_id}/reviews/${review_id}/replays/${replay_id}`
        ,{
          replay:replay,
          provider_id:this.session.getId()
        }
    );
  }



}
