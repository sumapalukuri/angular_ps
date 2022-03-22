import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupCounterComponent } from './setup-counter.component';

describe('SetupCounterComponent', () => {
  let component: SetupCounterComponent;
  let fixture: ComponentFixture<SetupCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
