import { Component, OnInit } from '@angular/core';
import {AngularServiceService} from '../angular-service.service';
import {Article} from '../models/articles';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
articles : Article[];
  constructor(private firebaseService :AngularServiceService) { }

  ngOnInit() {
    this.firebaseService.getArticleItem().subscribe(articles =>{
      this.articles = articles;
    })
  }

}
