import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroedetalleComponent } from './heroedetalle.component';

describe('HeroedetalleComponent', () => {
  let component: HeroedetalleComponent;
  let fixture: ComponentFixture<HeroedetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroedetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroedetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
