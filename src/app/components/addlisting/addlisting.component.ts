import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';


@Component({
  selector: 'app-addlisting',
  templateUrl: './addlisting.component.html',
  styleUrls: ['./addlisting.component.css']
})
export class AddlistingComponent implements OnInit {
  message:string;
  numOfLikes:number;
  currentUser:any;

  constructor(private firebaseService:FirebaseService) {}

  ngOnInit() {
    //get current user
    this.firebaseService.getCurrentUser().subscribe(currentUser => {
      console.log(currentUser.auth.providerData);
      this.currentUser=currentUser.auth.providerData;
      this.currentUser=this.currentUser[0];
    });
  }

  onSubmitAdd() {
    this.numOfLikes=1;
    this.firebaseService.addListings(this.currentUser.displayName,this.message,this.numOfLikes);
    this.message="";
  }

}
