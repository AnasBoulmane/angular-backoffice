import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAvatarNavComponent } from './user-avatar-nav.component';

describe('UserAvatarNavComponent', () => {
  let component: UserAvatarNavComponent;
  let fixture: ComponentFixture<UserAvatarNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAvatarNavComponent],
    });
    fixture = TestBed.createComponent(UserAvatarNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
