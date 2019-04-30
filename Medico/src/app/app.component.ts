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
  Visite: Visita[] = [];   // <-- component property
  data: Object ={};
  loading: boolean;
  o :Observable<Visita[]>;

  constructor(public http: HttpClient){
    this.makeTypedRequest();


  }

  makeTypedRequest(): void {
    this.o = this.http.get<Visita[]>('');
    this.o.subscribe(data => {
        for(var i = 0; i < data.length; i++){
          //this.Visite.push(new Visita(data[i].userId));

          }

      });

   }

}
