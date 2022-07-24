export enum DistanceUnit {
  km = "km",
  mi = "mi",
  nm = "nm",
}

export type DistanceUnits = `${DistanceUnit}` | DistanceUnit;
