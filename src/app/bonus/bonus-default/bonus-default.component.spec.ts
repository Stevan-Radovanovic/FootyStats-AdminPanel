import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusDefaultComponent } from './bonus-default.component';

describe('BonusDefaultComponent', () => {
  let component: BonusDefaultComponent;
  let fixture: ComponentFixture<BonusDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonusDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
