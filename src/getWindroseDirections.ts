import { CompassPoints, Windrose, WindroseDirections } from "./types";

/**
 * getWindroseDirections - returns an array of directions for a given number of compass points
 *
 * @param compassPoints - the number of compass points to get directions for
 */
export function getWindroseDirections(
  compassPoints: CompassPoints
): Windrose[] {
  const windrose = Object.values(WindroseDirections);

  if (compassPoints === 32) {
    return windrose;
  }

  const n: number = windrose.length / compassPoints;

  return windrose.filter((_, index) => index % n === 0);
}
