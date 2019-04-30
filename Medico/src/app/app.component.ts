import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Visita } from './visita/visita.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Visita[] = [];   // <-- component property
  data: Object ={};
  loading: boolean;
  o :Observable<Visita[]>;

  constructor(public http: HttpClient){
    this.makeTypedRequest();


  }

  makeTypedRequest(): void {
    this.o = this.http.get<Article[]>('https://jsonplaceholder.typicode.com/posts');
    this.o.subscribe(data => {
        for(var i = 0; i < data.length; i++){
          this.articles.push(new Article(data[i].userId, data[i].id, data[i].title, data[i].body));

          }

      });

   }

}
