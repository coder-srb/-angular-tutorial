import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopedComponent } from './scoped.component';

describe('ScopedComponent', () => {
  let component: ScopedComponent;
  let fixture: ComponentFixture<ScopedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ScopedComponent]
    });
    fixture = TestBed.createComponent(ScopedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
