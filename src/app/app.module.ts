import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { FirebaseService } from './services/firebase.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FeedComponent } from './components/feed/feed.component';


export const firebaseConfig = {
  apiKey: "AIzaSyBRfuzOq3TWpUwFK7xZTAbmK99gPNDX5zE",
  authDomain: "project-backend-21e2d.firebaseapp.com",
  databaseURL: "https://project-backend-21e2d.firebaseio.com",
  storageBucket: "project-backend-21e2d.appspot.com",
  messagingSenderId: "560616325184"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

const appRoutes:Routes=[
  {path:"", component:HomeComponent},
  {path:"profile", component:ProfileComponent},
  {path:"feed", component:FeedComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
