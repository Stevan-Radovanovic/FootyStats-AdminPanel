import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusNewComponent } from './bonus-new.component';

describe('BonusNewComponent', () => {
  let component: BonusNewComponent;
  let fixture: ComponentFixture<BonusNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonusNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
