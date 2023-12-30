import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MastheadComponent } from '../masthead/masthead.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, MastheadComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {}
