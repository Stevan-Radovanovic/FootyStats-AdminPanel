import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatDeleteComponent } from './stat-delete.component';

describe('StatDeleteComponent', () => {
  let component: StatDeleteComponent;
  let fixture: ComponentFixture<StatDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
