import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDefaultComponent } from './game-default.component';

describe('GameDefaultComponent', () => {
  let component: GameDefaultComponent;
  let fixture: ComponentFixture<GameDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
