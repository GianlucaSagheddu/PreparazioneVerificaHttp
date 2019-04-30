import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
