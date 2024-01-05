import { object, string, enum_, url, array, optional, Output } from 'valibot';
import { TagSchema } from './tag';

export const CuisineType = {
  SideDish: 'SideDish',
  MainDish: 'MainDish',
  Soup: 'Soup',
} as const;
export type CuisineType = (typeof CuisineType)[keyof typeof CuisineType];

export const CuisineSchema = object({
  id: string(),
  name: string(),
  type: enum_(CuisineType),
  recipeUrl: optional(string([url()])),
  tags: array(TagSchema),
});

export type CuisineOutput = Output<typeof CuisineSchema>;
