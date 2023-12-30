import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-day-column',
  standalone: true,
  imports: [],
  templateUrl: './day-column.component.html',
  styleUrl: './day-column.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayColumnComponent {}
