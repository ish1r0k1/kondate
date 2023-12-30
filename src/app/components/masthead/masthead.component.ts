import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-masthead',
  standalone: true,
  imports: [NzAvatarModule, NzIconModule],
  templateUrl: './masthead.component.html',
  styleUrl: './masthead.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block border-b border-solid',
  },
})
export class MastheadComponent {}
