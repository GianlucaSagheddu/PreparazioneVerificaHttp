import { Component, OnInit, Input } from '@angular/core';
import { Visita } from '../visita/visita.model';
@Component({
  selector: 'app-visita-list',
  templateUrl: './visita-list.component.html',
  styleUrls: ['./visita-list.component.css']
})
export class VisitaListComponent implements OnInit {
  @Input() Vs:Visita;
  constructor() { }

  ngOnInit() {
  }

}
