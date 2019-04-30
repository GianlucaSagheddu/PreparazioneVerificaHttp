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

  makeCompactPost(Nome: string, Cognome: string, Indirizzo: string, Tel: string, Email: string): void {
    this.loading = true;
    this.http
    .post('https://jsonplaceholder.typicode.com/posts',
    JSON.stringify({
      Nome: Nome,
      Cognome: Cognome,
      Ind: Indirizzo,
      Tel: Tel,
      Email: Email

    })
    )
    .subscribe(data => {
      //console.log(this.data);
      this.data = data;

      this.loading = false;
    });
  }


    Inserisci(nome: HTMLInputElement, cognome: HTMLInputElement, ind: HTMLInputElement, tel: HTMLInputElement, mail: HTMLInputElement): boolean {

      let id = 0;
      this.makeCompactPost(nome.value, cognome.value, ind.value, tel.value, mail.value);
      //id = this.data.id;

      this.Visite.push(new Visita(nome.value, cognome.value, ind.value, tel.value, mail.value));


      return false;
    }

}
