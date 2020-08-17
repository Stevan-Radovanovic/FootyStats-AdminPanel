import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatEditComponent } from './stat-edit.component';

describe('StatEditComponent', () => {
  let component: StatEditComponent;
  let fixture: ComponentFixture<StatEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
