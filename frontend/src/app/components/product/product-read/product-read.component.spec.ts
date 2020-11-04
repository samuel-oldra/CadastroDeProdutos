import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReadComponent } from './product-read.component';

describe('ProductReadComponent', () => {
  let component: ProductReadComponent;
  let fixture: ComponentFixture<ProductReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
