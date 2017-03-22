import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class FirebaseService {
  listings: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) { }

  //gets all listings
  getListings() {
    this.listings=this.af.database.list('listings') as FirebaseListObservable<any[]>
    return this.listings;
  }

  //insert listing
  addListings(username:string, message:string, numOfLikes:number) {
    this.af.database.list('listings').push({ username: username, message:message, numOfLikes:numOfLikes });
  }

  //get current user details
  getCurrentUser() {
    return this.af.auth;
  }

}
