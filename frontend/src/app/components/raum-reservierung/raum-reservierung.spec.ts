import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaumReservierung } from './raum-reservierung';

describe('RaumReservierung', () => {
  let component: RaumReservierung;
  let fixture: ComponentFixture<RaumReservierung>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaumReservierung]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaumReservierung);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
