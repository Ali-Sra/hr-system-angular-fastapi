import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Abteilung } from './abteilung';

describe('Abteilung', () => {
  let component: Abteilung;
  let fixture: ComponentFixture<Abteilung>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Abteilung]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Abteilung);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
