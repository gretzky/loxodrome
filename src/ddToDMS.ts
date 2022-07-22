import { round } from "./math";

/**
 * ddToDMS - converts decimal degrees to decimal minutes
 *
 * @param degrees - decimal degrees
 * @param direction - latitude or longitude
 */
export function ddToDMS(
  dd: number,
  direction: "latitude" | "longitude"
): string {
  const dir =
    dd < 0
      ? direction === "latitude"
        ? "E"
        : "N"
      : direction === "longitude"
      ? "W"
      : "S";

  const deg = Math.abs(dd) | 0;
  const frac = Math.abs(dd) - deg;
  const min = (frac * 60) | 0;
  const sec = round(frac * 3600 - min * 60) / 100;

  return deg + "°" + min + "'" + sec + '"' + dir;
}
