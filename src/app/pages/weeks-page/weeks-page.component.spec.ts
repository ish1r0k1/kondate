import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeksPageComponent } from './weeks-page.component';

describe('WeeksPageComponent', () => {
  let component: WeeksPageComponent;
  let fixture: ComponentFixture<WeeksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeksPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeeksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
