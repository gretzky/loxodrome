import { toDegrees, toRadians } from "./math";
import { Coordinates } from "./types";

/**
 * midpoint - return the midpoint coordinate between 2 coordinates
 *
 * @param args
 * @param args.from - starting coordinates
 * @param args.to - ending coordinates
 * @param args.useRhumbLine - whether or not to get the midpoint along a rhumb line
 */
export function midpoint({
  from,
  to,
  useRhumbLine,
}: {
  from: Coordinates;
  to: Coordinates;
  useRhumbLine: boolean;
}): Coordinates {
  let φ1 = toRadians(from.latitude);
  let φ2 = toRadians(to.latitude);

  let λ1 = toRadians(from.longitude);
  let λ2 = toRadians(to.longitude);

  let Δλ = toRadians(to.longitude - from.longitude);

  if (useRhumbLine) {
    // crossing anti-meridian
    if (Math.abs(λ2 - λ1) > Math.PI) λ1 += 2 * Math.PI;

    const φ3 = (φ1 + φ2) / 2;
    const f1 = Math.tan(Math.PI / 4 + φ1 / 2);
    const f2 = Math.tan(Math.PI / 4 + φ2 / 2);
    const f3 = Math.tan(Math.PI / 4 + φ3 / 2);

    let λ3 =
      ((λ2 - λ1) * Math.log(f3) + λ1 * Math.log(f2) - λ2 * Math.log(f1)) /
      Math.log(f2 / f1);

    // parallel of latitude
    if (!isFinite(λ3)) λ3 = (λ1 + λ2) / 2;

    return {
      latitude: toDegrees(φ3),
      longitude: toDegrees(λ3),
    };
  }

  let Bx = Math.cos(φ2) * Math.cos(Δλ);
  let By = Math.cos(φ2) * Math.sin(Δλ);

  let x = Math.sqrt((Math.cos(φ1) + Bx) * (Math.cos(φ1) + Bx) + By * By);
  let y = Math.sin(φ1) + Math.sin(φ2);
  let φ3 = Math.atan2(y, x);

  let λ3 = λ1 + Math.atan2(By, Math.cos(φ1) + Bx);

  return {
    latitude: toDegrees(φ3),
    longitude: ((toDegrees(λ3) + 540) % 360) - 180,
  };
}
