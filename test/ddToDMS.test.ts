import { ddToDMS } from "../src";
import { coords3, coords3DMS } from "./util";

describe("ddToDMS", () => {
  const cases = [
    [coords3.latitude, "latitude", coords3DMS.latitude],
    [coords3.longitude, "longitude", coords3DMS.longitude],
  ];

  test.each(cases)("converts %p to %p", (degrees, direction, expected) => {
    /// @ts-ignore
    const result = ddToDMS(degrees, direction);

    expect(result).toEqual(expected);
  });
});
