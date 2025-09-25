import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMateria } from './cadastro-materia';

describe('CadastroMateria', () => {
  let component: CadastroMateria;
  let fixture: ComponentFixture<CadastroMateria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroMateria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroMateria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
