import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzResultModule } from 'ng-zorro-antd/result';

@Component({
  selector: 'app-internal-server-error-page',
  standalone: true,
  imports: [NzResultModule, RouterLinkWithHref, NzButtonModule],
  templateUrl: './internal-server-error-page.component.html',
  styleUrl: './internal-server-error-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex min-h-screen w-screen items-center justify-center',
  },
})
export class InternalServerErrorPageComponent {}
