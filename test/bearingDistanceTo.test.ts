import { bearingDistanceTo } from "../src";
import { coords2, coords3 } from "./util";

describe("bearingDistanceTo", () => {
  it("gets the bearings from start to destination", () => {
    const result = bearingDistanceTo({
      from: coords2,
      to: coords3,
    });

    expect(result).toEqual(
      expect.objectContaining({
        initialBearing: 92.93750659989644,
        finalBearing: 272.93750659989644,
      })
    );
  });

  it("gets the bearings from start to destination using a rhumb line", () => {
    const result = bearingDistanceTo({
      from: coords2,
      to: coords3,
      useRhumbLine: true,
    });

    expect(result).toEqual(
      expect.objectContaining({
        initialBearing: 2.973445576925826,
        finalBearing: 182.97344557692583,
      })
    );
  });
});
