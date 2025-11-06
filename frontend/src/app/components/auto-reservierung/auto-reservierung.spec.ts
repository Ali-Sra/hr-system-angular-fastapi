import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoReservierung } from './auto-reservierung';

describe('AutoReservierung', () => {
  let component: AutoReservierung;
  let fixture: ComponentFixture<AutoReservierung>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoReservierung]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoReservierung);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
