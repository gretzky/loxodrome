import {
  DISTANCE_CONVERSION_POINTS,
  convertDistance,
  DistanceUnit,
} from "../src";

describe("convertDistance", () => {
  const cases = [
    [1, DistanceUnit.km, DistanceUnit.mi, DISTANCE_CONVERSION_POINTS.km_mi],
    [1, DistanceUnit.km, DistanceUnit.nm, DISTANCE_CONVERSION_POINTS.km_nm],
    [1, DistanceUnit.mi, DistanceUnit.km, DISTANCE_CONVERSION_POINTS.mi_km],
    [1, DistanceUnit.mi, DistanceUnit.nm, DISTANCE_CONVERSION_POINTS.mi_nm],
    [1, DistanceUnit.nm, DistanceUnit.km, DISTANCE_CONVERSION_POINTS.nm_km],
    [1, DistanceUnit.nm, DistanceUnit.mi, DISTANCE_CONVERSION_POINTS.nm_mi],
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
