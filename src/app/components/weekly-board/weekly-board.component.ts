import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-weekly-board',
  standalone: true,
  imports: [],
  templateUrl: './weekly-board.component.html',
  styleUrl: './weekly-board.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeeklyBoardComponent {}
