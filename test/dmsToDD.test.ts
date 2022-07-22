import { dmsToDD, round } from "../src";
import { coords3, coords3DMS } from "./util";

describe("dmsToDD", () => {
  const cases = [
    [coords3DMS.latitude, "latitude", coords3.latitude],
    [coords3DMS.longitude, "longitude", coords3.longitude],
  ];

  test.each(cases)("converts %p to %p", (degrees, direction, expected) => {
    /// @ts-ignore
    const result = dmsToDD(degrees, direction);

    expect(result).toEqual(expected);
  });
});
