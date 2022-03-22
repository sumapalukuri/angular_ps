import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickTrackerComponent } from './click-tracker.component';

describe('ClickTrackerComponent', () => {
  let component: ClickTrackerComponent;
  let fixture: ComponentFixture<ClickTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
