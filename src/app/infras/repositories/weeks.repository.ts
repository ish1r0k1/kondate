import { Injectable } from '@angular/core';
import { addDays, startOfWeek } from 'date-fns';
import { Observable, delay, of } from 'rxjs';
import { DayOfWeek } from '../../core/constants/day-of-week';
import { CuisineOutput, CuisineType } from '../../core/schemas/consine';
import { MealOutput, MealType } from '../../core/schemas/meal';
import { WeekOutput } from '../../core/schemas/week';

const shuffledArr = (arr: any[]) => arr.sort(() => 0.5 - Math.random());

let _uniqueId = 1;

const createDummyCuisine = (): CuisineOutput => ({
  id: (_uniqueId++).toString(),
  name: `Cuisine ${_uniqueId}`,
  tags: [],
  type: shuffledArr(Object.values(CuisineType))[0],
});

const createDummyCuisines = (length = 3): CuisineOutput[] => [
  ...Array.from({ length }).map(() => createDummyCuisine()),
];

const createDummyMeals = (): MealOutput[] =>
  Object.values(MealType).map((mealType) => ({
    cuisines: createDummyCuisines(),
    type: mealType,
  }));

const createDummyWeeks = (): Array<WeekOutput> =>
  Array.from({ length: 3 }).map((_, i) => {
    const baseDate = startOfWeek(new Date());
    const start = addDays(baseDate, i * 7);
    const end = addDays(start, 6);

    return {
      id: (_uniqueId++).toString(),
      days: {
        [DayOfWeek.Sunday]: createDummyMeals(),
        [DayOfWeek.Monday]: createDummyMeals(),
        [DayOfWeek.Tuesday]: createDummyMeals(),
        [DayOfWeek.Wednessday]: createDummyMeals(),
        [DayOfWeek.Thursday]: createDummyMeals(),
        [DayOfWeek.Friday]: createDummyMeals(),
        [DayOfWeek.Saturday]: createDummyMeals(),
      },
      period: {
        start,
        end,
      },
    };
  });

const DUMMY_WEEKS = createDummyWeeks();

@Injectable({
  providedIn: 'root',
})
export class WeeksRepository {
  getWeeks(): Observable<Array<WeekOutput>> {
    return of(DUMMY_WEEKS).pipe(delay(1000));
  }

  getWeekById(_: WeekOutput['id']): Observable<WeekOutput> {
    return of(DUMMY_WEEKS[0]).pipe(delay(1000));
  }
}
