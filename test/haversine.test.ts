import { haversine } from "../src";
import { coords1, coords2, coords3 } from "./util";

describe("haversine", () => {
  const cases = [
    [coords1, coords2, false, 172.90230719252398],
    [coords1, coords2, true, 172.90306721918475],
    [coords2, coords3, false, 158.44908529456544],
    [coords2, coords3, true, 158.44909585793752],
    [coords1, coords3, false, 322.100033015514],
    [coords1, coords3, true, 322.1011588263475],
  ];

  test.each(cases)(
    "from %p to %p in %p (rhumb line %p) is %p",
    (from, to, useRhumbLine, expected) => {
      const result = haversine({
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
