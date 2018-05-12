import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore , AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
import { Article} from '../app/models/articles'
import {Observable} from 'rxjs/Observable'

@Injectable()
export class AngularServiceService {

  articleCollection : AngularFirestoreCollection<Article>
  articles: Observable<Article[]>;
articleDoc : AngularFirestoreDocument<Article>;

  constructor(public afd : AngularFireDatabase ,public afs :AngularFirestore) {
    afs.firestore.settings({ timestampsInSnapshots: true });


    this.articleCollection = this.afs.collection('articles' , ref => ref.orderBy('title','asc'));

    // this.articles = this.afs.collection('articles').valueChanges();
    this.articles = this.articleCollection.snapshotChanges().map(changes =>{
      return changes.map(a =>{
        const data = a.payload.doc.data() as Article;
        data.id = a.payload.doc.id;
        return data;
      })
    })
   }
   

  getArticleItem(){
return this.articles;
  }

  addArticleItem(article : Article){
this.articleCollection.add(article);
  }

  deleteArticle(article : Article){
    this.articleDoc = this.afs.doc(`articles/${article.id}`);
    this.articleDoc.delete();
  }

}
