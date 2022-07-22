import { vincenty } from "../src";
import { coords1, coords2, coords3 } from "./util";

describe("vincenty", () => {
  const cases = [
    [coords1, coords2, 172.631],
    [coords2, coords3, 158.147],
    [coords1, coords3, 321.484],
  ];

  test.each(cases)(
    "from %p to %p in %p (rhumb line %p) is %p",
    (from, to, expected) => {
      const result = vincenty({
        /// @ts-ignore
        from,
        /// @ts-ignore
        to,
      });

      expect(result).toEqual(expected);
    }
  );
});
