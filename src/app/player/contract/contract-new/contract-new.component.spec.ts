import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractNewComponent } from './contract-new.component';

describe('ContractNewComponent', () => {
  let component: ContractNewComponent;
  let fixture: ComponentFixture<ContractNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
