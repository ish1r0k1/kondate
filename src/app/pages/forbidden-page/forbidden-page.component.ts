import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-forbidden-page',
  standalone: true,
  imports: [NzResultModule, RouterLinkWithHref, NzButtonModule],
  templateUrl: './forbidden-page.component.html',
  styleUrl: './forbidden-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex min-h-full w-screen items-center justify-center',
  },
})
export class ForbiddenPageComponent {}
