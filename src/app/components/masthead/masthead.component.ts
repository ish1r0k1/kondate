import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-masthead',
  standalone: true,
  imports: [],
  templateUrl: './masthead.component.html',
  styleUrl: './masthead.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MastheadComponent {}