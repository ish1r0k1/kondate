import { Color } from '../constants/color';
import { number, object, string, enum_, minValue } from 'valibot';

export const TagSchema = object({
  name: string(),
  color: enum_(Color),
  orderLevel: number([minValue(0)]),
});
