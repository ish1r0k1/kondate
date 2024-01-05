import { AsyncPipe, DatePipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { rxState } from '@rx-angular/state';
import { map, catchError, of, startWith, endWith } from 'rxjs';
import { WeekOutput } from '../../core/schemas/week';
import {
  GenericState,
  GenericStoreStatus,
} from '../../core/store/generic-state';
import { WeeksRepository } from '../../infras/repositories/weeks.repository';
import { SelectorUtil } from '../../utils/selector-util';

@Component({
  selector: 'app-plan-page',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, DatePipe],
  templateUrl: './plan-page.component.html',
  styleUrl: './plan-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanPageComponent {
  readonly #repo = inject(WeeksRepository);
  readonly #state = rxState<GenericState<{ week: WeekOutput | null }>>(
    ({ set, connect }) => {
      set({ week: null, status: GenericStoreStatus.Pending, error: null });
      connect(
        this.#repo.getWeekById('').pipe(
          map((week) => ({ week })),
          catchError(() => of({ status: GenericStoreStatus.Error })),
          startWith({ status: GenericStoreStatus.Loading }),
          endWith({ status: GenericStoreStatus.Success }),
        ),
      );
    },
  );

  readonly week$ = this.#state.select('week');
  readonly loading$ = this.#state
    .select('status')
    .pipe(map(SelectorUtil.isLoading));
}
