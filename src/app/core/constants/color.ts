export const Color = {
  Tomato: 'Tomato',
  Kale: 'Kale',
} as const;

export type Color = (typeof Color)[keyof typeof Color];
