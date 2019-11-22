import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioSquadraComponent } from './dettaglio-squadra.component';

describe('DettaglioSqaudraComponent', () => {
  let component: DettaglioSquadraComponent;
  let fixture: ComponentFixture<DettaglioSquadraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettaglioSquadraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioSquadraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
