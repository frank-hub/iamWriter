import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MDBBootstrapModule } from './typescripts/free';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { BlogComponent } from './blog/blog.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule} from "angularfire2/firestore"
import { AngularServiceService } from './angular-service.service';

const firebaseConfig = {
  apiKey: "AIzaSyCWHCk_Mukev9RMo4ZVD9KNTmGxRUHwVAQ",
  authDomain: "iamawriter-4247c.firebaseapp.com",
  databaseURL: "https://iamawriter-4247c.firebaseio.com",
  projectId: "iamawriter-4247c",
  storageBucket: "",
  messagingSenderId: "69697584382"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    CreateArticleComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig,'iamawriter'),
    AngularFirestoreModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'blog',
        component: BlogComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'admin',
        component: DashboardComponent
      },
      {
        path: 'create-article',
        component: CreateArticleComponent
      }
    ]),
    FormsModule,
    HttpModule,
    MDBBootstrapModule.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    })
  ],
  providers: [
    AngularServiceService,
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
