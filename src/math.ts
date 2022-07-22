/**
 * toRadians - calculates the radians of a number
 * @param num - number to calcuate
 */
export function toRadians(num: number): number {
  return (Math.PI * num) / 180;
}

/**
 * toDegrees - calculates a number in degree expression
 * @param num - number to calculate
 */
export function toDegrees(num: number): number {
  return (180 * num) / Math.PI;
}

/**
 * round - rounds a number to the nearest provided places. more reliable than Math.round
 * @param num - number to round
 * @param places - number of decimal places to round to
 */
export function round(num: string | number, places = 2): number {
  const value: number = typeof num === "string" ? Number(num) : num;
  const multiplier: number = Math.pow(10, places);

  return Math.round(value * multiplier) / multiplier;
}
