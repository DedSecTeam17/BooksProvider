import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignPasswordResetResponseComponent } from './sign-password-reset-response.component';

describe('SignPasswordResetResponseComponent', () => {
  let component: SignPasswordResetResponseComponent;
  let fixture: ComponentFixture<SignPasswordResetResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignPasswordResetResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignPasswordResetResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
