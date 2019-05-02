import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { VisitaComponent } from './visita/visita.component';
import { VisitaListComponent } from './visita-list/visita-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VisitaComponent,
    VisitaListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
