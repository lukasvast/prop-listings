import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  listings:any;
  currentUser:any;

  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
    //get all listings of posts
    this.firebaseService.getListings().subscribe(listings => {
      console.log(listings);
      this.listings=listings;
    });
    //get current user
    this.firebaseService.getCurrentUser().subscribe(currentUser => {
      console.log(currentUser.auth.providerData);
      this.currentUser=currentUser.auth.providerData;
      this.currentUser=this.currentUser[0];
    });
  }

}
