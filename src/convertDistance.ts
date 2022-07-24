import { DistanceUnits } from "./types";

export const DISTANCE_CONVERSION_POINTS: Record<string, number> = {
  km_mi: 0.621371,
  km_nm: 0.5399568,
  mi_km: 1.609344016,
  mi_nm: 0.8689762,
  nm_km: 1.852,
  nm_mi: 1.150779,
};

/**
 * convertDistance - converts a number from one unit to another
 *
 * @param distance - numeric distance to convert
 * @param from - original distance unit
 * @param to - unit to convert to
 */
export function convertDistance({
  distance,
  from,
  to,
}: {
  distance: number;
  from: DistanceUnits;
  to: DistanceUnits;
}): number {
  const conversionPoint = `${from}_${to}`;

  return distance * DISTANCE_CONVERSION_POINTS[conversionPoint];
}
