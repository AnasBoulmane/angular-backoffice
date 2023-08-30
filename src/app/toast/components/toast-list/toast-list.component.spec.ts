import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastListComponent } from './toast-list.component';

describe('ToastListComponent', () => {
  let component: ToastListComponent;
  let fixture: ComponentFixture<ToastListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToastListComponent],
    });
    fixture = TestBed.createComponent(ToastListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
