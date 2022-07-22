import { Windrose4Direction } from "./windrose";

export type DMS = `${string}° ${string}' ${string}" ${Windrose4Direction}`;

export enum Hemispheres {
  lat = "latitude",
  lon = "longitude",
  latitude = "latitude",
  longitude = "longitude",
}
export type Hemisphere = Hemispheres | "latitude" | "longitude";
