import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@Component({
  selector: 'app-masthead',
  standalone: true,
  imports: [NzAvatarModule, RouterLinkWithHref],
  templateUrl: './masthead.component.html',
  styleUrl: './masthead.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MastheadComponent {}
