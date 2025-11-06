import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gehalt } from './gehalt';

describe('Gehalt', () => {
  let component: Gehalt;
  let fixture: ComponentFixture<Gehalt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gehalt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gehalt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
