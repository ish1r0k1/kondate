import { object, date, string, optional, array } from 'valibot';
import { DayOfWeek } from '../constants/day-of-week';
import { CuisineSchema } from './consine';

export const WeekSchema = object({
  id: string(),
  days: object(
    Object.values(DayOfWeek).reduce(
      (o, d) => {
        o[d] = array(CuisineSchema);

        return o;
      },
      {} as Record<DayOfWeek, ReturnType<typeof array<typeof CuisineSchema>>>,
    ),
  ),
  period: object({
    start: date(),
    end: date(),
  }),
  note: optional(string()),
});
