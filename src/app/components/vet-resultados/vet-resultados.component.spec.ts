import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetResultadosComponent } from './vet-resultados.component';

describe('VetResultadosComponent', () => {
  let component: VetResultadosComponent;
  let fixture: ComponentFixture<VetResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetResultadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VetResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
