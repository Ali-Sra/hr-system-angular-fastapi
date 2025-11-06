import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zertifikat } from './zertifikat';

describe('Zertifikat', () => {
  let component: Zertifikat;
  let fixture: ComponentFixture<Zertifikat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Zertifikat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zertifikat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
