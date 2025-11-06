import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Raum } from './raum';

describe('Raum', () => {
  let component: Raum;
  let fixture: ComponentFixture<Raum>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Raum]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Raum);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
