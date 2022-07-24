import { SpeedUnit, SpeedUnits } from "./types/speed";

export const SPEED_CONVERSION_POINTS: Record<string, number> = {
  kmh_mph: 0.6213712,
  kmh_kts: 0.5399568,
  kmh_ms: 0.2777778,
  mph_kmh: 1.609344129,
  mph_kts: 0.8689762,
  mph_ms: 0.44704,
  kts_kmh: 1.852,
  kts_mph: 1.150779,
  kts_ms: 0.5144444,
  ms_kmh: 3.6,
  ms_mph: 2.236936,
  ms_kts: 1.943844,
};

export function convertSpeed({
  speed,
  from,
  to,
}: {
  speed: number;
  from: SpeedUnits;
  to: SpeedUnit;
}) {
  const conversionPoint = `${from}_${to}`;

  return speed * SPEED_CONVERSION_POINTS[conversionPoint];
}
