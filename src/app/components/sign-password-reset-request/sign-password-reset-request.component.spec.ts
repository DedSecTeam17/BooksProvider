import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignPasswordResetRequestComponent } from './sign-password-reset-request.component';

describe('SignPasswordResetRequestComponent', () => {
  let component: SignPasswordResetRequestComponent;
  let fixture: ComponentFixture<SignPasswordResetRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignPasswordResetRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignPasswordResetRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
