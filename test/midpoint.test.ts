import { midpoint } from "../src";
import { coords1, coords2, coords3 } from "./util";

describe("midpoint", () => {
  const cases = [
    [
      coords1,
      coords2,
      false,
      { latitude: 43.04838605844864, longitude: -70.58691712065843 },
    ],
    [
      coords1,
      coords2,
      true,
      { latitude: 43.047577336171955, longitude: -70.58442316980887 },
    ],
    [
      coords2,
      coords3,
      false,
      { latitude: 44.46796975650858, longitude: -70.20198237666222 },
    ],
    [
      coords2,
      coords3,
      true,
      { latitude: 44.467958085011574, longitude: -70.2022972729559 },
    ],
    [
      coords1,
      coords3,
      false,
      { latitude: 43.75883611401379, longitude: -70.64266343760573 },
    ],
    [
      coords1,
      coords3,
      true,
      { latitude: 43.75820925116037, longitude: -70.63816039006682 },
    ],
  ];

  test.each(cases)(
    "from %p to %p in %p (rhumb line %p) is %p",
    (from, to, useRhumbLine, expected) => {
      const result = midpoint({
        /// @ts-ignore
        from,
        /// @ts-ignore
        to,
        /// @ts-ignore
        useRhumbLine,
      });

      expect(result).toEqual(expected);
    }
  );
});
