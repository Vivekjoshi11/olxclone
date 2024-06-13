import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyBillingPackaesComponent } from './buy-billing-packaes.component';

describe('BuyBillingPackaesComponent', () => {
  let component: BuyBillingPackaesComponent;
  let fixture: ComponentFixture<BuyBillingPackaesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyBillingPackaesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyBillingPackaesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
