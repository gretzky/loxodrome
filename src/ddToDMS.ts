import { Windrose4Direction } from "./types";
import { DMS, Hemisphere, Hemispheres } from "./types/degrees";

/**
 * ddToDMS - converts decimal degrees to decimal minutes
 *
 * @param degrees - decimal degrees
 * @param direction - latitude or longitude
 */
export function ddToDMS(dd: number, direction: Hemisphere): DMS {
  const isLongitude = direction === Hemispheres.longitude;

  const dir =
    dd < 0
      ? isLongitude
        ? Windrose4Direction.w
        : Windrose4Direction.s
      : isLongitude
      ? Windrose4Direction.e
      : Windrose4Direction.n;

  const deg = 0 | (dd < 0 ? (dd = -dd) : dd);
  const min = 0 | (((dd += 1e-9) % 1) * 60);
  const sec = (0 | (((dd * 60) % 1) * 6000)) / 100;

  return `${deg}° ${min}' ${sec}" ${dir}`;
}
