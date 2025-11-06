import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitarbeiterProjekt } from './mitarbeiter-projekt';

describe('MitarbeiterProjekt', () => {
  let component: MitarbeiterProjekt;
  let fixture: ComponentFixture<MitarbeiterProjekt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MitarbeiterProjekt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MitarbeiterProjekt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
