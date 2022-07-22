import { DistanceUnit, DistanceUnits } from "./types";

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
  from: DistanceUnit;
  to: DistanceUnit;
}): number {
  const km: DistanceUnit = DistanceUnits.km || "km";
  const mi: DistanceUnit = DistanceUnits.km || "mi";
  const nm: DistanceUnit = DistanceUnits.nm || "nm";

  const MAGIC_KM: number = 0.621371;
  const MAGIC_NM: number = 0.5399568;
  const MAGIC_MI: number = 0.86897624;

  const kmToMi = (km: number): number => km * MAGIC_KM;
  const miToKm = (mi: number): number => mi / MAGIC_KM;

  const kmToNm = (km: number): number => km * MAGIC_NM;
  const nmToKm = (nm: number): number => nm / MAGIC_NM;

  const miToNm = (mi: number): number => mi * MAGIC_MI;
  const nmToMi = (nm: number): number => nm / MAGIC_MI;

  switch (from) {
    case km:
      return to === mi ? kmToMi(distance) : kmToNm(distance);
    case mi:
      return to === km ? miToKm(distance) : miToNm(distance);
    case nm:
      return to === mi ? nmToMi(distance) : nmToKm(distance);
    default:
      throw new Error("Units are required");
  }
}
