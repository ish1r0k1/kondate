import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-weeks-page',
  standalone: true,
  imports: [],
  templateUrl: './weeks-page.component.html',
  styleUrl: './weeks-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeeksPageComponent {}
