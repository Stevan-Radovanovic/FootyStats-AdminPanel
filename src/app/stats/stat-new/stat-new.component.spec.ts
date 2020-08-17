import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatNewComponent } from './stat-new.component';

describe('StatNewComponent', () => {
  let component: StatNewComponent;
  let fixture: ComponentFixture<StatNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
