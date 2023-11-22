import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasComponentComponent } from './compras-component.component';

describe('ComprasComponentComponent', () => {
  let component: ComprasComponentComponent;
  let fixture: ComponentFixture<ComprasComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComprasComponentComponent]
    });
    fixture = TestBed.createComponent(ComprasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
