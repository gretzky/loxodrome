export enum WindroseDirection {
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
export type Windrose32 = `${WindroseDirection}` | WindroseDirection;

export enum Windrose16Direction {
  n = WindroseDirection.n,
  nne = WindroseDirection.nne,
  ne = WindroseDirection.ne,
  ene = WindroseDirection.ene,
  e = WindroseDirection.e,
  ese = WindroseDirection.ese,
  se = WindroseDirection.se,
  sse = WindroseDirection.sse,
  s = WindroseDirection.s,
  ssw = WindroseDirection.ssw,
  sw = WindroseDirection.sw,
  wsw = WindroseDirection.wsw,
  w = WindroseDirection.w,
  wnw = WindroseDirection.wnw,
  nw = WindroseDirection.nw,
  nnw = WindroseDirection.nnw,
}
export type Windrose16 = `${Windrose16Direction}` | Windrose16Direction;

export enum Windrose8Direction {
  n = WindroseDirection.n,
  ne = WindroseDirection.ne,
  e = WindroseDirection.e,
  se = WindroseDirection.se,
  s = WindroseDirection.s,
  sw = WindroseDirection.sw,
  w = WindroseDirection.w,
  nw = WindroseDirection.nw,
}
export type Windrose8 = `${Windrose8Direction}` | Windrose8Direction;

export enum Windrose4Direction {
  n = WindroseDirection.n,
  e = WindroseDirection.e,
  s = WindroseDirection.s,
  w = WindroseDirection.w,
}
export type Windrose4 = `${Windrose4Direction}` | Windrose4Direction;

export type Windrose = `${Windrose32}` | WindroseDirection;
