import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracaoComponentComponent } from './administracao-component.component';

describe('AdministracaoComponentComponent', () => {
  let component: AdministracaoComponentComponent;
  let fixture: ComponentFixture<AdministracaoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministracaoComponentComponent]
    });
    fixture = TestBed.createComponent(AdministracaoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
