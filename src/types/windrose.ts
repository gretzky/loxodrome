export enum WindroseDirections {
  n = "N",
  nbe = "NbE",
  nne = "NNE",
  nebn = "NEbN",
  ne = "NE",
  nebe = "NEbE",
  ene = "ENE",
  ebn = "EbN",
  e = "E",
  ebs = "EbS",
  ese = "ESE",
  sebe = "SEbE",
  se = "SE",
  sebs = "SEbS",
  sse = "SSE",
  sbe = "SbE",
  s = "S",
  sbw = "SbW",
  ssw = "SSW",
  swbs = "SWbS",
  sw = "SW",
  swbe = "SWbW",
  wsw = "WSW",
  wbs = "WbS",
  w = "W",
  wbn = "WbN",
  wnw = "WNW",
  nwbw = "NWbW",
  nw = "NW",
  nwbn = "NWbN",
  nnw = "NNW",
  nbw = "NbW",
}
export type Windrose32 = `${WindroseDirections}` | WindroseDirections;

export enum Windrose16Directions {
  n = WindroseDirections.n,
  nne = WindroseDirections.nne,
  ne = WindroseDirections.ne,
  ene = WindroseDirections.ene,
  e = WindroseDirections.e,
  ese = WindroseDirections.ese,
  se = WindroseDirections.se,
  sse = WindroseDirections.sse,
  s = WindroseDirections.s,
  ssw = WindroseDirections.ssw,
  sw = WindroseDirections.sw,
  wsw = WindroseDirections.wsw,
  w = WindroseDirections.w,
  wnw = WindroseDirections.wnw,
  nw = WindroseDirections.nw,
  nnw = WindroseDirections.nnw,
}
export type Windrose16 = `${Windrose16Directions}` | Windrose16Directions;

export enum Windrose8Directions {
  n = WindroseDirections.n,
  ne = WindroseDirections.ne,
  e = WindroseDirections.e,
  se = WindroseDirections.se,
  s = WindroseDirections.s,
  sw = WindroseDirections.sw,
  w = WindroseDirections.w,
  nw = WindroseDirections.nw,
}
export type Windrose8 = `${Windrose8Directions}` | Windrose8Directions;

export enum Windrose4Directions {
  n = WindroseDirections.n,
  e = WindroseDirections.e,
  s = WindroseDirections.s,
  w = WindroseDirections.w,
}
export type Windrose4 = `${Windrose4Directions}` | Windrose4Directions;

export type Windrose = `${Windrose32}` | WindroseDirections;
