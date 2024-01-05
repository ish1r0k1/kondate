import { object, enum_, array, Output } from 'valibot';
import { CuisineSchema } from './consine';

export const MealType = {
  Dinner: 'Dinner',
  Lunch: 'Lunch',
  Breakfast: 'Breakfast',
} as const;
export type MealType = (typeof MealType)[keyof typeof MealType];

export const MealSchema = object({
  cuisines: array(CuisineSchema),
  type: enum_(MealType),
});

export type MealOutput = Output<typeof MealSchema>;
