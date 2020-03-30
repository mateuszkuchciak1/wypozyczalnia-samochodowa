import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RezerwacjaComponent } from './rezerwacja.component';

describe('RezerwacjaComponent', () => {
  let component: RezerwacjaComponent;
  let fixture: ComponentFixture<RezerwacjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RezerwacjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RezerwacjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
