import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatDefaultComponent } from './stat-default.component';

describe('StatDefaultComponent', () => {
  let component: StatDefaultComponent;
  let fixture: ComponentFixture<StatDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
