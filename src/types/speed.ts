export enum SpeedUnit {
  kmh = "kmh",
  mph = "mph",
  kts = "kts",
  ms = "ms",
}
export type SpeedUnits = `${SpeedUnit}` | SpeedUnit;

export enum SpeedUnitDisplay {
  kmh = "km/h",
  mph = "mph",
  kts = "kts",
  ms = "m/s",
}
