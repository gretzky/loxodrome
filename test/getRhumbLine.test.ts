import { getRhumbLine } from "../src";

describe("getRhumbLine", () => {
  const cases = [
    [0, -33, 0.5759586531581288],
    [33, 33, 0],
    [42, -171, -2.5656340004316642],
  ];

  test.each(cases)("from %p to %p get rhumb line %p", (from, to, expected) => {
    const result = getRhumbLine({
      from: from as number,
      to: to as number,
    });

    expect(result).toEqual(expected);
  });
});
