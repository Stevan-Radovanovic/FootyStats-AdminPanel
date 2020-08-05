import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractDefaultComponent } from './contract-default.component';

describe('ContractDefaultComponent', () => {
  let component: ContractDefaultComponent;
  let fixture: ComponentFixture<ContractDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
