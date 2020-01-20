import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosFormComponent } from './carros-form.component';

describe('CarrosFormComponent', () => {
  let component: CarrosFormComponent;
  let fixture: ComponentFixture<CarrosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
