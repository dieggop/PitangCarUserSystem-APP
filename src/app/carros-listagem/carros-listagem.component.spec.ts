import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosListagemComponent } from './carros-listagem.component';

describe('CarrosListagemComponent', () => {
  let component: CarrosListagemComponent;
  let fixture: ComponentFixture<CarrosListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrosListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
