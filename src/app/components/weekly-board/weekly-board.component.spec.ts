import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyBoardComponent } from './weekly-board.component';

describe('WeeklyBoardComponent', () => {
  let component: WeeklyBoardComponent;
  let fixture: ComponentFixture<WeeklyBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyBoardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeeklyBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
