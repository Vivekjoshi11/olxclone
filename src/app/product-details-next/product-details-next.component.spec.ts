import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsNextComponent } from './product-details-next.component';

describe('ProductDetailsNextComponent', () => {
  let component: ProductDetailsNextComponent;
  let fixture: ComponentFixture<ProductDetailsNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailsNextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDetailsNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
