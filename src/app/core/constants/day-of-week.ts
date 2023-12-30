export const DayOfWeek = {
  Monday: 'Monday',
  Tuesday: 'Tuesday',
  Wednessday: 'Wednessday',
  Thursday: 'Thursday',
  Friday: 'Friday',
  Saturday: 'Saturday',
  Sunday: 'Sunday',
} as const;

export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];
