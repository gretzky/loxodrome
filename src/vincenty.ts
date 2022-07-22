import { round, toRadians } from "./math";
import { Coordinates } from "./types";

/**
 * vincenty - returns the geodetic distance between 2 points in meters using the vincenty inverse formula
 *
 * original script by Chris Veness
 *
 * @param args
 * @param args.from - starting coordinates
 * @param args.to - ending coordinates
 */
export function vincenty({ from, to }: Record<string, Coordinates>): number {
  // length of semi-major axis of the ellipsoid (radius at equator)
  let a = 6378137;
  // length of semi-minor axis of the ellipsoid (radius at poles)
  let b = 6356752.3142;
  // flattening of the ellipsoid (WGS-84)
  let ƒ = 1 / 298.257223563;
  // longitudinal difference between points
  let L = toRadians(to.longitude - from.longitude);
  // reduced latitudes on the auxiliary sphere
  let U1 = Math.atan((1 - ƒ) * Math.tan(toRadians(from.latitude)));
  let U2 = Math.atan((1 - ƒ) * Math.tan(toRadians(to.latitude)));
  // precalcuate sin/cosine
  let sinU1 = Math.sin(U1);
  let cosU1 = Math.cos(U1);
  let sinU2 = Math.sin(U2);
  let cosU2 = Math.cos(U2);
  // difference in longitude of the points on the auxiliary sphere
  let λ = L;
  let λP;

  let iterationLimit = 100;

  do {
    var sinλ = Math.sin(λ),
      cosλ = Math.cos(λ),
      sinσ = Math.sqrt(
        cosU2 * sinλ * (cosU2 * sinλ) +
          (cosU1 * sinU2 - sinU1 * cosU2 * cosλ) *
            (cosU1 * sinU2 - sinU1 * cosU2 * cosλ)
      );
    if (0 === sinσ) {
      return 0; // co-incident points
    }
    var cosσ = sinU1 * sinU2 + cosU1 * cosU2 * cosλ,
      σ = Math.atan2(sinσ, cosσ),
      sinα = (cosU1 * cosU2 * sinλ) / sinσ,
      cosSqα = 1 - sinα * sinα,
      cos2σM = cosσ - (2 * sinU1 * sinU2) / cosSqα,
      C = (ƒ / 16) * cosSqα * (4 + ƒ * (4 - 3 * cosSqα));
    if (isNaN(cos2σM)) {
      cos2σM = 0; // equatorial line: cosSqα = 0 (§6)
    }
    λP = λ;
    λ =
      L +
      (1 - C) *
        ƒ *
        sinα *
        (σ + C * sinσ * (cos2σM + C * cosσ * (-1 + 2 * cos2σM * cos2σM)));
  } while (Math.abs(λ - λP) > 1e-12 && --iterationLimit > 0);

  if (!iterationLimit) {
    // failed to converge
    return NaN;
  }

  var uSq = (cosSqα * (a * a - b * b)) / (b * b),
    A = 1 + (uSq / 16384) * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq))),
    B = (uSq / 1024) * (256 + uSq * (-128 + uSq * (74 - 47 * uSq))),
    deltaσ =
      B *
      sinσ *
      (cos2σM +
        (B / 4) *
          (cosσ * (-1 + 2 * cos2σM * cos2σM) -
            (B / 6) *
              cos2σM *
              (-3 + 4 * sinσ * sinσ) *
              (-3 + 4 * cos2σM * cos2σM))),
    s = b * A * (σ - deltaσ);

  // round to 1mm precision
  return round(s, 3);
}
