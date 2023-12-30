import { TagColors } from '../constants/tag-colors';
import { number, object, string, enum_, minValue } from 'valibot';

export const TagSchema = object({
  name: string(),
  color: enum_(TagColors),
  orderLevel: number([minValue(0)]),
});
