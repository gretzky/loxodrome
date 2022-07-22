import { getRhumbLine } from "./getRhumbLine";
import { toDegrees, toRadians } from "./math";
import { Coordinates } from "./types";

export type BearingDistanceToParams = {
  from: Coordinates;
  to: Coordinates;
  useRhumbLine?: boolean;
};

export type BearingDistanceTo = {
  initialBearing: number;
  finalBearing: number;
};

/**
 * bearingDistanceTo - returns the distance between 2 points expressed in bearings
 *
 * @param args
 * @param args.from - starting bearing
 * @param args.from - ending bearing
 * @param args.useRhumbLine - whether or not to calculate over a rhumb line
 */
export function bearingDistanceTo({
  from,
  to,
  useRhumbLine,
}: BearingDistanceToParams): BearingDistanceTo {
  const { latitude: fromLat, longitude: fromLng } = from;
  const { latitude: toLat, longitude: toLng } = to;

  const φ1: number = toRadians(fromLat);
  const φ2: number = toRadians(toLat);

  const Δλ: number = useRhumbLine
    ? getRhumbLine({ from: fromLng, to: toLng })
    : toRadians(toLng - fromLng);

  let x, y;

  if (useRhumbLine) {
    x = Math.log(
      Math.tan(φ2 / 2 + Math.PI / 4) / Math.tan(φ1 / 2 + Math.PI / 4)
    );
    y = Δλ;
  } else {
    x = Math.sin(Δλ) * Math.cos(φ2);
    y =
      Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);
  }

  const θ: number = Math.atan2(y, x);

  const initialBearing: number = (toDegrees(θ) + 360) % 360;
  const finalBearing: number = (initialBearing + 180) % 360;

  return {
    initialBearing,
    finalBearing,
  };
}
