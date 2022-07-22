import { DistanceUnit, Coordinates } from "./types";
import { toRadians } from "./math";
import { getRhumbLine } from "./getRhumbLine";

/**
 * haversine - great-circle distance in kilometers between 2 points calculated using the haversine formula
 *
 * a = sin²(Δφ/2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ/2)
 * c = 2 ⋅ atan2( √a, √(1−a) )
 *
 * φ = latitude, λ = longitude
 *
 * @param from - coordinates of the start point
 * @param to - coordinates of the end point
 * @param useRhumbLine - whether or not to return the distance along a rhumb line
 */
export function haversine({
  from,
  to,
  useRhumbLine,
}: {
  from: Coordinates;
  to: Coordinates;
  useRhumbLine?: boolean;
}): number {
  const EARTH_RADIUS_KM = 6379;

  const { latitude: fromLat, longitude: fromLng } = from;
  const { latitude: toLat, longitude: toLng } = to;

  const φ1: number = toRadians(fromLat);
  const φ2: number = toRadians(toLat);

  const λ1: number = toRadians(fromLng);
  const λ2: number = toRadians(toLng);

  const Δφ: number = φ2 - φ1;
  const Δλ: number = useRhumbLine
    ? getRhumbLine({ from: fromLng, to: toLng })
    : λ2 - λ1;

  let radiansDistance;

  if (useRhumbLine) {
    // on Mercator projection, longitude distances shrink by latitude
    // q is the 'stretch factor'
    // q becomes ill-conditioned along E-W line (0/0) so use empirical tolerance to avoid it
    const Δψ = Math.log(
      Math.tan(φ2 / 2 + Math.PI / 4) / Math.tan(φ1 / 2 + Math.PI / 4)
    );
    const q = Math.abs(Δψ) > 10e-12 ? Δφ / Δψ : Math.cos(φ1);

    // distance is pythagoras on 'stretched' Mercator projection
    radiansDistance = Math.sqrt(Δφ * Δφ + q * q * Δλ * Δλ); // angular distance in radians
  } else {
    const a: number =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

    radiansDistance = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  const distance: number = EARTH_RADIUS_KM * radiansDistance;

  return distance;
}
