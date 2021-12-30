import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCapitulosComponent } from './listado-capitulos.component';

describe('ListadoCapitulosComponent', () => {
  let component: ListadoCapitulosComponent;
  let fixture: ComponentFixture<ListadoCapitulosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoCapitulosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoCapitulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
