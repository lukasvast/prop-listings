import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

interface Post {
  createdAtMs:number;
  message:string;
  numOfLikes:number;
  photoURL:string;
  username:string;
}

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  posts:Post[];
  currentUser:any;
  currentTimeMs:number;
  message:string;

  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
    //get all posts
    this.firebaseService.getPosts().subscribe(posts => {
      //console.log(posts);
      this.posts=posts;
    });
    //get currentUser
    this.firebaseService.getCurrentUser().subscribe(currentUser => {
      //console.log(currentUser.auth.providerData[0]);
      this.currentUser=currentUser.auth.providerData[0];
    });
    //set currentTime
    this.currentTimeMs=Date.now();
  }

  onSubmitAdd() {
    //insert post into firebase
    this.firebaseService.insertPost(this.currentUser.displayName,this.currentUser.photoURL,this.message,0);
    this.message="";
  }

  onClickDelete(key:string) {
    this.firebaseService.deletePost(key);
  }

}
