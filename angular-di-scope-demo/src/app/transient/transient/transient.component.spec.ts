import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransientComponent } from './transient.component';

describe('TransientComponent', () => {
  let component: TransientComponent;
  let fixture: ComponentFixture<TransientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TransientComponent]
    });
    fixture = TestBed.createComponent(TransientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
