import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusEditComponent } from './bonus-edit.component';

describe('BonusEditComponent', () => {
  let component: BonusEditComponent;
  let fixture: ComponentFixture<BonusEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonusEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
