import { Routes } from '@angular/router';
import { ForbiddenPageComponent } from './pages/forbidden-page/forbidden-page.component';
import { InternalServerErrorPageComponent } from './pages/internal-server-error-page/internal-server-error-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

export const routes: Routes = [
  {
    path: 'weeks',
    loadComponent: () =>
      import('./pages/weeks-page/weeks-page.component').then(
        (c) => c.WeeksPageComponent,
      ),
  },
  {
    path: 'weeks/:weekId',
    loadComponent: () =>
      import('./pages/plan-page/plan-page.component').then(
        (c) => c.PlanPageComponent,
      ),
  },
  {
    path: 'weeks',
    loadComponent: () =>
      import('./pages/weeks-page/weeks-page.component').then(
        (c) => c.WeeksPageComponent,
      ),
  },
  {
    path: '403',
    component: ForbiddenPageComponent,
  },
  {
    path: '404',
    component: NotFoundPageComponent,
  },
  {
    path: '500',
    component: InternalServerErrorPageComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];
