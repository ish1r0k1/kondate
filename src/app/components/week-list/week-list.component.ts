import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-week-list',
  standalone: true,
  imports: [],
  templateUrl: './week-list.component.html',
  styleUrl: './week-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeekListComponent {}
