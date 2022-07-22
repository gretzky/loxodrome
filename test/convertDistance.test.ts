import { CONVERSION_POINTS, convertDistance, DistanceUnits } from "../src";

describe("convertDistance", () => {
  const cases = [
    [1, DistanceUnits.km, DistanceUnits.mi, CONVERSION_POINTS.km_mi],
    [1, DistanceUnits.km, DistanceUnits.nm, CONVERSION_POINTS.km_nm],
    [1, DistanceUnits.mi, DistanceUnits.km, CONVERSION_POINTS.mi_km],
    [1, DistanceUnits.mi, DistanceUnits.nm, CONVERSION_POINTS.mi_nm],
    [1, DistanceUnits.nm, DistanceUnits.km, CONVERSION_POINTS.nm_km],
    [1, DistanceUnits.nm, DistanceUnits.mi, CONVERSION_POINTS.nm_mi],
  ];

  test.each(cases)("converts %p%p to %p", (distance, from, to, expected) => {
    const result = convertDistance({
      /// @ts-ignore
      distance,
      /// @ts-ignore
      from,
      /// @ts-ignore
      to,
    });

    expect(result).toEqual(expected);
  });
});
