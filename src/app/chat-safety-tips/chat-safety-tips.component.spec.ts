import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSafetyTipsComponent } from './chat-safety-tips.component';

describe('ChatSafetyTipsComponent', () => {
  let component: ChatSafetyTipsComponent;
  let fixture: ComponentFixture<ChatSafetyTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatSafetyTipsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatSafetyTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
