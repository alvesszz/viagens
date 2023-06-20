import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesDaViagemComponent } from './detalhes-da-viagem.component';

describe('DetalhesDaViagemComponent', () => {
  let component: DetalhesDaViagemComponent;
  let fixture: ComponentFixture<DetalhesDaViagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesDaViagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesDaViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
