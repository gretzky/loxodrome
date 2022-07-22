export enum CompassPoint {
  cardinal = 4,
  mariner = 8,
  classical = 16,
  celestial = 32,
}
export type CompassPointNums = 4 | 8 | 16 | 32;
export type CompassPoints = CompassPoint | CompassPointNums;

export enum CompassRoseName {
  cardinal = "cardinal",
  mariner = "mariner",
  classical = "classical",
  celestial = "celestial",
}

export type CompassRoseType = `${CompassRoseName}`;

export type CompassRose = CompassRoseName | CompassRoseType;
