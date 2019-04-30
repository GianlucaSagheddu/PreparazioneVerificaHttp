import { Component, OnInit, Input } from '@angular/core';
import { Visita } from './visita.model';


@Component({
  selector: 'app-visita',
  templateUrl: './visita.component.html',
  styleUrls: ['./visita.component.css']
})
export class VisitaComponent implements OnInit {
  @Input() V:Visita;
  constructor() { }

  ngOnInit() {
  }

}
