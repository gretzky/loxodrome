import { SPEED_CONVERSION_POINTS, convertSpeed, SpeedUnit } from "../src";

describe("convertSpeed", () => {
  const cases = [
    [1, SpeedUnit.kmh, SpeedUnit.mph, SPEED_CONVERSION_POINTS.kmh_mph],
    [1, SpeedUnit.kmh, SpeedUnit.kts, SPEED_CONVERSION_POINTS.kmh_kts],
    [1, SpeedUnit.kmh, SpeedUnit.ms, SPEED_CONVERSION_POINTS.kmh_ms],
    [1, SpeedUnit.mph, SpeedUnit.kmh, SPEED_CONVERSION_POINTS.mph_kmh],
    [1, SpeedUnit.mph, SpeedUnit.kts, SPEED_CONVERSION_POINTS.mph_kts],
    [1, SpeedUnit.mph, SpeedUnit.ms, SPEED_CONVERSION_POINTS.mph_ms],
    [1, SpeedUnit.kts, SpeedUnit.mph, SPEED_CONVERSION_POINTS.kts_mph],
    [1, SpeedUnit.kts, SpeedUnit.kmh, SPEED_CONVERSION_POINTS.kts_kmh],
    [1, SpeedUnit.kts, SpeedUnit.ms, SPEED_CONVERSION_POINTS.kts_ms],
    [1, SpeedUnit.ms, SpeedUnit.mph, SPEED_CONVERSION_POINTS.ms_mph],
    [1, SpeedUnit.ms, SpeedUnit.kts, SPEED_CONVERSION_POINTS.ms_kts],
    [1, SpeedUnit.ms, SpeedUnit.kmh, SPEED_CONVERSION_POINTS.ms_kmh],
  ];

  test.each(cases)("converts %p%p to %p", (speed, from, to, expected) => {
    const result = convertSpeed({
      /// @ts-ignore
      speed,
      /// @ts-ignore
      from,
      /// @ts-ignore
      to,
    });

    expect(result).toEqual(expected);
  });
});
