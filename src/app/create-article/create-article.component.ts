import { Component, OnInit } from '@angular/core';
import { AngularServiceService } from '../angular-service.service';
import { Article}  from '../models/articles';



@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  articles : Article[];

  article : Article ={
    title : '',
    content : '',
    id :''
  }
  constructor(private firebaseService : AngularServiceService) { 
    
  }
  total_article : any = '';
  onSubmit(){
    if (this.article.title != '' && this.article.content != '') {
      this.firebaseService.addArticleItem(this.article);
      this.total_article =  this.article.id;
      this.article.title = '';
      this.article.content ='';
    }
  }

  

  ngOnInit() {
    this.firebaseService.getArticleItem().subscribe(articles =>{
      // console.log(articles);
      this.articles = articles;
    });
  }
  deleteArticle(event,article){
this.firebaseService.deleteArticle(article);
alert("The article has been deleted "+ event )
  }

}
