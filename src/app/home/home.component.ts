import { Component, OnInit } from '@angular/core';
import { AngularServiceService } from '../angular-service.service';
import { Article } from '../models/articles';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles: Article[];


  constructor(private firebaseService: AngularServiceService) {

    this.firebaseService.getArticleItem().subscribe(articles => {
      // console.log(articles);
      this.articles = articles;
    });
  }


  ngOnInit() {

  }

}
