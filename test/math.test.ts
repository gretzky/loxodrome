import { round, toDegrees, toRadians } from "../src";

describe("math", () => {
  const radsCases = [
    [6, 0.10471975511965977],
    [0, 0],
    [3.14, 0.05480333851262195],
  ];

  test.each(radsCases)("converts %p to radians", (number, expected) => {
    const result = toRadians(number);

    expect(result).toEqual(expected);
  });

  const degreesCases = [
    [6, 343.77467707849394],
    [0, 0],
    [3.14, 179.90874767107852],
  ];

  test.each(degreesCases)("converts %p to degrees", (number, expected) => {
    const result = toDegrees(number);

    expect(result).toEqual(expected);
  });

  const roundCases = [
    [Math.PI, 2, 3.14],
    [Math.PI, 7, 3.1415927],
    [Math.PI, 1, 3.1],
  ];

  test.each(roundCases)(
    "converts %p to degrees",
    (number, places, expected) => {
      const result = round(number as number, places as number);

      expect(result).toEqual(expected);
    }
  );
});
