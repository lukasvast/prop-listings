import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser:any;

  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
    //get current user
    this.firebaseService.getCurrentUser().subscribe(currentUser => {
      this.currentUser=currentUser.auth.providerData[0];
    });
  }

}
