import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitarbeiterZertifikat } from './mitarbeiter-zertifikat';

describe('MitarbeiterZertifikat', () => {
  let component: MitarbeiterZertifikat;
  let fixture: ComponentFixture<MitarbeiterZertifikat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MitarbeiterZertifikat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MitarbeiterZertifikat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
