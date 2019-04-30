import { Component, OnInit, Input } from '@angular/core';
import { Visita } from '../visita/visita.model';
@Component({
  selector: 'app-visita-list',
  templateUrl: './visita-list.component.html',
  styleUrls: ['./visita-list.component.css']
})
export class VisitaListComponent implements OnInit {
  @Input() V:Visita;
  constructor() { }
  selectedV: Visita;

  onSelect(Visita: Visita): void {
    this.selectedV = Visita;
  }
  ngOnInit() {
  }

}
