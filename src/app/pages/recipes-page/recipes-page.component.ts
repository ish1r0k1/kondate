import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-recipes-page',
  standalone: true,
  imports: [],
  templateUrl: './recipes-page.component.html',
  styleUrl: './recipes-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesPageComponent {}
