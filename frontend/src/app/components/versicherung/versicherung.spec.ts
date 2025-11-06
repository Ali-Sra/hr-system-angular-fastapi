import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Versicherung } from './versicherung';

describe('Versicherung', () => {
  let component: Versicherung;
  let fixture: ComponentFixture<Versicherung>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Versicherung]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Versicherung);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
