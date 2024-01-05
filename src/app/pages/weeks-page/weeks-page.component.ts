import { AsyncPipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { rxState } from '@rx-angular/state';
import { format } from 'date-fns';
import { catchError, endWith, map, of, startWith } from 'rxjs';
import { WeekOutput } from '../../core/schemas/week';
import {
  GenericState,
  GenericStoreStatus,
} from '../../core/store/generic-state';
import { WeeksRepository } from '../../infras/repositories/weeks.repository';
import { RouteUtil } from '../../utils/route-util';
import { SelectorUtil } from '../../utils/selector-util';

interface Week extends WeekOutput {
  title: string;
  url: string;
}

@Component({
  selector: 'app-weeks-page',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './weeks-page.component.html',
  styleUrl: './weeks-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeeksPageComponent {
  readonly #repo = inject(WeeksRepository);
  readonly #state = rxState<GenericState<{ weeks: Week[] }>>(
    ({ set, connect }) => {
      set({ weeks: [], status: GenericStoreStatus.Pending, error: null });
      connect(
        this.#repo.getWeeks().pipe(
          map((weeks) =>
            weeks.map((week) => ({
              ...week,
              title: format(week.period.start, 'PPPP'),
              url: RouteUtil.getWeekRouteUrl(week.id),
            })),
          ),
          map((weeks) => ({ weeks })),
          catchError(() => of({ status: GenericStoreStatus.Error })),
          startWith({ status: GenericStoreStatus.Loading }),
          endWith({ status: GenericStoreStatus.Success }),
        ),
      );
    },
  );

  readonly weeks$ = this.#state.select('weeks');
  readonly loading$ = this.#state
    .select('status')
    .pipe(map(SelectorUtil.isLoading));
}
