import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitarbeiterList } from './mitarbeiter-list';

describe('MitarbeiterList', () => {
  let component: MitarbeiterList;
  let fixture: ComponentFixture<MitarbeiterList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MitarbeiterList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MitarbeiterList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
