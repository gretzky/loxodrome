import { pointsInRange } from "../src";
import { coords1, coords2, coords3 } from "./util";

describe("pointsInRange", () => {
  const cases = [
    [coords1, coords2, 25, false],
    [coords1, coords2, 100, true],
    [coords2, coords3, 50, false],
    [coords2, coords3, 100, true],
    [coords1, coords3, 1, false],
    [coords1, coords3, 100, false],
  ];

  test.each(cases)(
    "from %p to %p in %p (rhumb line %p) is %p",
    (from, to, range, expected) => {
      const result = pointsInRange({
        /// @ts-ignore
        from,
        /// @ts-ignore
        to,
        /// @ts-ignore
        range,
      });

      expect(result).toEqual(expected);
    }
  );
});
