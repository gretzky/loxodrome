import {
  CompassPoints,
  CompassPoint,
  Windrose16Direction,
  WindroseDirection,
  Windrose4Direction,
  Windrose8Direction,
  getWindroseDirections,
} from "../src";

describe("getWindroseDirections", () => {
  const cases = [
    [CompassPoint.cardinal, Object.values(Windrose4Direction)],
    [CompassPoint.mariner, Object.values(Windrose8Direction)],
    [CompassPoint.celestial, Object.values(WindroseDirection)],
    [CompassPoint.classical, Object.values(Windrose16Direction)],
  ];

  /// @ts-ignore
  test.each(cases)("for %p get points %p", (compassPoints, expected) => {
    const result = getWindroseDirections(compassPoints as CompassPoints);

    expect(result).toEqual(expected);
  });
});
