import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameChooseComponent } from './game-choose.component';

describe('GameChooseComponent', () => {
  let component: GameChooseComponent;
  let fixture: ComponentFixture<GameChooseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameChooseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
