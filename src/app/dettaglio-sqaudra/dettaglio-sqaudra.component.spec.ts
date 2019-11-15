import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioSqaudraComponent } from './dettaglio-sqaudra.component';

describe('DettaglioSqaudraComponent', () => {
  let component: DettaglioSqaudraComponent;
  let fixture: ComponentFixture<DettaglioSqaudraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettaglioSqaudraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioSqaudraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
