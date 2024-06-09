import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MssageComponentComponent } from './mssage-component.component';

describe('MssageComponentComponent', () => {
  let component: MssageComponentComponent;
  let fixture: ComponentFixture<MssageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MssageComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MssageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
