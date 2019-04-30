import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitaListComponent } from './visita-list.component';

describe('VisitaListComponent', () => {
  let component: VisitaListComponent;
  let fixture: ComponentFixture<VisitaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
