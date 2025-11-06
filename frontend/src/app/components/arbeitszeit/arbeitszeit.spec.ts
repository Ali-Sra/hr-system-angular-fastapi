import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arbeitszeit } from './arbeitszeit';

describe('Arbeitszeit', () => {
  let component: Arbeitszeit;
  let fixture: ComponentFixture<Arbeitszeit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Arbeitszeit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arbeitszeit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
