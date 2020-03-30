import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSamochodowComponent } from './lista-samochodow.component';

describe('ListaSamochodowComponent', () => {
  let component: ListaSamochodowComponent;
  let fixture: ComponentFixture<ListaSamochodowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSamochodowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSamochodowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
