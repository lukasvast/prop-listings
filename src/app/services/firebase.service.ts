import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class FirebaseService {
  posts: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) { }

  //gets all posts order by createdAtMs
  getPosts() {
    this.posts=this.af.database.list('posts', {
      query: {
        orderByChild: 'createdAtMs'
      }
    }) as FirebaseListObservable<any[]>
    return this.posts;
  }

  //insert post
  insertPost(username:string, photoURL:string, message:string, numOfLikes:number) {
    this.af.database.list('posts').push({ username: username,photoURL: photoURL, message:message, numOfLikes:numOfLikes, createdAtMs:-Date.now()});
  }

  //delete post
  deletePost(key: string) {
    this.af.database.list('posts').remove(key);
  }

  //get current user
  getCurrentUser() {
    return this.af.auth;
  }

}
