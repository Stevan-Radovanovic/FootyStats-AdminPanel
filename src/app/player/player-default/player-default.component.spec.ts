import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDefaultComponent } from './player-default.component';

describe('PlayerDefaultComponent', () => {
  let component: PlayerDefaultComponent;
  let fixture: ComponentFixture<PlayerDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
