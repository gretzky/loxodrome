import { getCenterOfCoordinates, Coordinates } from "../src";
import { coords1, coords2, coords3 } from "./util";

describe("getCenterOfCoordinates", () => {
  const cases = [
    [
      [coords1, coords2],
      { latitude: 43.04838605844864, longitude: -70.5869171206584 },
    ],
    [
      [coords2, coords3],
      { latitude: 44.46796975650858, longitude: -70.20198237666223 },
    ],
    [
      [coords1, coords3],
      { latitude: 43.75883611401379, longitude: -70.6426634376057 },
    ],
    [
      [coords1, coords2, coords3],
      { latitude: 43.758567000692096, longitude: -70.47869993035702 },
    ],
  ];

  test.each(cases)("for coords %p get the center %p", (coords, expected) => {
    const result = getCenterOfCoordinates(coords as Coordinates[]);

    expect(result).toEqual(expected);
  });
});
