import { Output, array, date, object, optional, string } from 'valibot';
import { DayOfWeek } from '../constants/day-of-week';
import { MealSchema } from './meal';

export const WeekSchema = object({
  id: string(),
  days: object(
    Object.values(DayOfWeek).reduce(
      (o, d) => {
        o[d] = array(MealSchema);

        return o;
      },
      {} as Record<DayOfWeek, ReturnType<typeof array<typeof MealSchema>>>,
    ),
  ),
  period: object({
    start: date(),
    end: date(),
  }),
  note: optional(string()),
});

export type WeekOutput = Output<typeof WeekSchema>;
