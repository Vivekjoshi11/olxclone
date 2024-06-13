import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyBisinessComponent } from './buy-bisiness.component';

describe('BuyBisinessComponent', () => {
  let component: BuyBisinessComponent;
  let fixture: ComponentFixture<BuyBisinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyBisinessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyBisinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
