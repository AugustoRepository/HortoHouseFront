import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagementoComponent } from './pagamento.component';

describe('PagementoComponent', () => {
  let component: PagementoComponent;
  let fixture: ComponentFixture<PagementoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagementoComponent]
    });
    fixture = TestBed.createComponent(PagementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
