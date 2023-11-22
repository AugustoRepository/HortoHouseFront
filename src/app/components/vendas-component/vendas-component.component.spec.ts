import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendasComponentComponent } from './vendas-component.component';

describe('VendasComponentComponent', () => {
  let component: VendasComponentComponent;
  let fixture: ComponentFixture<VendasComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendasComponentComponent]
    });
    fixture = TestBed.createComponent(VendasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
