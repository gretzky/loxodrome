import { bearingToDirection, WindroseDirection, CompassPoints } from "../src";

describe("bearingToDirection", () => {
  const bearingCases = [
    // 4 points
    [0, 4, WindroseDirection.n],
    [90, 4, WindroseDirection.e],
    [180, 4, WindroseDirection.s],
    [270, 4, WindroseDirection.w],
    // 8 points
    [0, 8, WindroseDirection.n],
    [22.5, 8, WindroseDirection.n],
    [22.6, 8, WindroseDirection.ne],
    [67.5, 8, WindroseDirection.ne],
    [67.6, 8, WindroseDirection.e],
    [112.5, 8, WindroseDirection.e],
    [112.6, 8, WindroseDirection.se],
    [157.5, 8, WindroseDirection.se],
    [157.6, 8, WindroseDirection.s],
    [202.5, 8, WindroseDirection.s],
    [202.6, 8, WindroseDirection.sw],
    [247.5, 8, WindroseDirection.sw],
    [247.6, 8, WindroseDirection.w],
    [292.5, 8, WindroseDirection.w],
    [292.6, 8, WindroseDirection.nw],
    [337.5, 8, WindroseDirection.nw],
    // 16 points
    [0, 16, WindroseDirection.n],
    [11.25, 16, WindroseDirection.n],
    [11.26, 16, WindroseDirection.nne],
    [33.75, 16, WindroseDirection.nne],
    [33.76, 16, WindroseDirection.ne],
    [56.25, 16, WindroseDirection.ne],
    [56.26, 16, WindroseDirection.ene],
    [78.75, 16, WindroseDirection.ene],
    [78.76, 16, WindroseDirection.e],
    [101.25, 16, WindroseDirection.e],
    [101.26, 16, WindroseDirection.ese],
    [123.75, 16, WindroseDirection.ese],
    [123.76, 16, WindroseDirection.se],
    [146.25, 16, WindroseDirection.se],
    [146.26, 16, WindroseDirection.sse],
    [168.75, 16, WindroseDirection.sse],
    [168.76, 16, WindroseDirection.s],
    [191.25, 16, WindroseDirection.s],
    [191.26, 16, WindroseDirection.ssw],
    [213.75, 16, WindroseDirection.ssw],
    [213.76, 16, WindroseDirection.sw],
    [236.23, 16, WindroseDirection.sw],
    [236.26, 16, WindroseDirection.wsw],
    [258.75, 16, WindroseDirection.wsw],
    [258.76, 16, WindroseDirection.w],
    [281.25, 16, WindroseDirection.w],
    [281.26, 16, WindroseDirection.wnw],
    [303.75, 16, WindroseDirection.wnw],
    [303.76, 16, WindroseDirection.nw],
    [326.25, 16, WindroseDirection.nw],
    [326.26, 16, WindroseDirection.nnw],
    [348.75, 16, WindroseDirection.nnw],
    // // 32 points
    [0, 32, WindroseDirection.n],
    [5.625, 32, WindroseDirection.n],
    [5.626, 32, WindroseDirection.nbe],
    [16.875, 32, WindroseDirection.nbe],
    [16.876, 32, WindroseDirection.nne],
    [28.125, 32, WindroseDirection.nne],
    [28.126, 32, WindroseDirection.nebn],
    [39.375, 32, WindroseDirection.nebn],
    [39.376, 32, WindroseDirection.ne],
    [50.625, 32, WindroseDirection.ne],
    [50.626, 32, WindroseDirection.nebe],
    [61.875, 32, WindroseDirection.nebe],
    [61.876, 32, WindroseDirection.ene],
    [73.125, 32, WindroseDirection.ene],
    [73.126, 32, WindroseDirection.ebn],
    [84.375, 32, WindroseDirection.ebn],
    [84.376, 32, WindroseDirection.e],
    [95.625, 32, WindroseDirection.e],
    [95.626, 32, WindroseDirection.ebs],
    [106.875, 32, WindroseDirection.ebs],
    [106.876, 32, WindroseDirection.ese],
    [118.125, 32, WindroseDirection.ese],
    [118.126, 32, WindroseDirection.sebe],
    [129.375, 32, WindroseDirection.sebe],
    [129.376, 32, WindroseDirection.se],
    [140.625, 32, WindroseDirection.se],
    [140.626, 32, WindroseDirection.sebs],
    [151.875, 32, WindroseDirection.sebs],
    [151.876, 32, WindroseDirection.sse],
    [163.125, 32, WindroseDirection.sse],
    [163.126, 32, WindroseDirection.sbe],
    [174.375, 32, WindroseDirection.sbe],
    [174.376, 32, WindroseDirection.s],
    [185.625, 32, WindroseDirection.s],
    [185.626, 32, WindroseDirection.sbw],
    [196.875, 32, WindroseDirection.sbw],
    [196.876, 32, WindroseDirection.ssw],
    [208.125, 32, WindroseDirection.ssw],
    [208.126, 32, WindroseDirection.swbs],
    [219.375, 32, WindroseDirection.swbs],
    [219.376, 32, WindroseDirection.sw],
    [230.625, 32, WindroseDirection.sw],
    [230.626, 32, WindroseDirection.swbe],
    [241.875, 32, WindroseDirection.swbe],
    [241.876, 32, WindroseDirection.wsw],
    [253.125, 32, WindroseDirection.wsw],
    [253.126, 32, WindroseDirection.wbs],
    [264.375, 32, WindroseDirection.wbs],
    [264.376, 32, WindroseDirection.w],
    [275.625, 32, WindroseDirection.w],
    [275.626, 32, WindroseDirection.wbn],
    [286.875, 32, WindroseDirection.wbn],
    [286.876, 32, WindroseDirection.wnw],
    [298.125, 32, WindroseDirection.wnw],
    [298.126, 32, WindroseDirection.nwbw],
    [309.375, 32, WindroseDirection.nwbw],
    [309.376, 32, WindroseDirection.nw],
    [320.625, 32, WindroseDirection.nw],
    [320.626, 32, WindroseDirection.nwbn],
    [331.875, 32, WindroseDirection.nwbn],
    [331.876, 32, WindroseDirection.nnw],
    [343.125, 32, WindroseDirection.nnw],
    [343.126, 32, WindroseDirection.nbw],
    [354.375, 32, WindroseDirection.nbw],
  ];

  test.each(bearingCases)(
    "for bearing %p on %p point compass, returns %p",
    (bearing, compassPoints, expected) => {
      const result = bearingToDirection(
        bearing as number,
        compassPoints as CompassPoints
      );

      expect(result).toEqual(expected);
    }
  );
});
