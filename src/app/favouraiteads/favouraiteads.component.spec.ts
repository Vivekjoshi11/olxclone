import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouraiteadsComponent } from './favouraiteads.component';

describe('FavouraiteadsComponent', () => {
  let component: FavouraiteadsComponent;
  let fixture: ComponentFixture<FavouraiteadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavouraiteadsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavouraiteadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
