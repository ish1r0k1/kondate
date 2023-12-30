import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-plan-page',
  standalone: true,
  imports: [],
  templateUrl: './plan-page.component.html',
  styleUrl: './plan-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanPageComponent {}
