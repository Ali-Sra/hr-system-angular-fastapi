import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitarbeiterVersicherung } from './mitarbeiter-versicherung';

describe('MitarbeiterVersicherung', () => {
  let component: MitarbeiterVersicherung;
  let fixture: ComponentFixture<MitarbeiterVersicherung>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MitarbeiterVersicherung]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MitarbeiterVersicherung);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
