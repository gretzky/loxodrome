export enum DistanceUnits {
  km = "km",
  mi = "mi",
  nm = "nm",
}

export type DistanceUnit = `${DistanceUnits}` | DistanceUnits;
