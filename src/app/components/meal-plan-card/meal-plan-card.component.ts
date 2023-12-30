import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-meal-plan-card',
  standalone: true,
  imports: [],
  templateUrl: './meal-plan-card.component.html',
  styleUrl: './meal-plan-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealPlanCardComponent {}
