import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSimpleLayoutComponent } from './page-simple-layout.component';

describe('PageSimpleLayoutComponent', () => {
  let component: PageSimpleLayoutComponent;
  let fixture: ComponentFixture<PageSimpleLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageSimpleLayoutComponent],
    });
    fixture = TestBed.createComponent(PageSimpleLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
