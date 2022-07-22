export enum DistanceUnits {
  km = "kilometer",
  mi = "mile",
  nm = "nautical_mile",
}

export type DistanceUnit = `${DistanceUnits}` | DistanceUnits;
