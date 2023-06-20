import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemDeViagensComponent } from './listagem-de-viagens.component';

describe('ListagemDeViagensComponent', () => {
  let component: ListagemDeViagensComponent;
  let fixture: ComponentFixture<ListagemDeViagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemDeViagensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemDeViagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
