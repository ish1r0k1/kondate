export const TagColors = {
  Tomato: 'Tomato',
  Kale: 'Kale',
} as const;

export type TagColors = (typeof TagColors)[keyof typeof TagColors];
