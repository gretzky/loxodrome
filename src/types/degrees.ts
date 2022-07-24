import { Windrose4Direction } from "./windrose";

export type DMS = `${string}° ${string}' ${string}" ${Windrose4Direction}`;

export enum Hemisphere {
  lat = "latitude",
  lon = "longitude",
  latitude = "latitude",
  longitude = "longitude",
}
export type Hemispheres = Hemisphere | "latitude" | "longitude";
