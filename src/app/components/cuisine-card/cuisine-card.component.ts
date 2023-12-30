import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cuisine-card',
  standalone: true,
  imports: [],
  templateUrl: './cuisine-card.component.html',
  styleUrl: './cuisine-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuisineCardComponent {}
