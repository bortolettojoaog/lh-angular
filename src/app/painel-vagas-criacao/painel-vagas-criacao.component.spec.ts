import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelVagasCriacaoComponent } from './painel-vagas-criacao.component';

describe('PainelVagasCriacaoComponent', () => {
  let component: PainelVagasCriacaoComponent;
  let fixture: ComponentFixture<PainelVagasCriacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelVagasCriacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelVagasCriacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
