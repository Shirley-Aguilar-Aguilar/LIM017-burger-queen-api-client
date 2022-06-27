import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateOrdersComponent } from './state-orders.component';

describe('StateOrdersComponent', () => {
  let component: StateOrdersComponent;
  let fixture: ComponentFixture<StateOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
