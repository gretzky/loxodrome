import { round } from "./math";
import { Coordinates } from "./types";

/**
 * pointsInRange - returns whether or not 2 points are within a certain statute mile distance from each other
 *
 * @param args
 * @param args.from - starting coordindates
 * @param args.to - ending coordinates
 */
export function pointsInRange({
  from,
  to,
  range,
}: {
  from: Coordinates;
  to: Coordinates;
  range: number;
}): boolean {
  const NM_TO_MI = 0.868976;

  // get distance per arcminute latitude
  const arcminsLat = 69.047 / 60;

  // distance per arcminute longitude depends on the cosine of the arcminutes of latitude
  const arcminsLon = (1 * Math.cos(from.latitude)) / NM_TO_MI;

  // grab latitude delta in minutes and convert to statute miles
  const Δlat =
    round(arcminsLat * Math.abs(from.latitude * 60 - to.latitude * 60) * 100) /
    100;
  // grab longitude delta in minutes and convert to statue miles
  const Δlon =
    round(
      arcminsLon * Math.abs(from.longitude * 60 - to.longitude * 60) * 100
    ) / 100;

  // calculate combined delta of the lat/lon pairs by finding the long edge of the triangle formed by the intersection of deltas
  const Δ = Math.sqrt(Math.pow(Δlon, 2) + Math.pow(Δlat, 2));

  return Δ <= range;
}
