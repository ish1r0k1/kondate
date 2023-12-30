import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-internal-server-error-page',
  standalone: true,
  imports: [],
  templateUrl: './internal-server-error-page.component.html',
  styleUrl: './internal-server-error-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InternalServerErrorPageComponent {}
