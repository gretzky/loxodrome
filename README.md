# loxodrome

Geodesy and navigational functions

## Usage

Install with the package manager of your choice

```bash
// or yarn or pnpm
npm install @gretzky/loxodrome
```

## API

### `bearingDistanceTo({ from, to, useRhumbLine }): { initialBearing: number; finalBearing: number }`

Returns the initial and final bearing distance between 2 points.

| Param        | Type                                       | Description                                                                                | Default      |
| ------------ | ------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------ |
| from         | [`Coordinates`](/src/types/coordinates.ts) | set of starting coordinates                                                                | **Required** |
| to           | [`Coordinates`](/src/types/coordinates.ts) | set of ending coordinates                                                                  | **Required** |
| useRhumbLine | `boolean`                                  | whether or not to calculate along a [rhumb line](https://en.wikipedia.org/wiki/Rhumb_line) | **Required** |

### `bearingToDirection(bearing: number, compassPoints: CompassPoints): Windrose`

Converts a bearing to a given compass windrose direction.

| Param         | Type                                     | Description                     | Default      |
| ------------- | ---------------------------------------- | ------------------------------- | ------------ |
| bearing       | `number`                                 | bearing to convert              | **Required** |
| compassPoints | [`CompassPoints`](/src/types/compass.ts) | number of compass points to use | `16`         |

### `convertDistance({ distance, from, to }): number`

Converts a number from one unit to another.

| Param    | Type                                     | Description         | Default      |
| -------- | ---------------------------------------- | ------------------- | ------------ |
| distance | `number`                                 | distance to convert | **Required** |
| from     | [`DistanceUnit`](/src/types/distance.ts) | original unit       | **Required** |
| to       | [`DistanceUnit`](/src/types/distance.ts) | unit to convert to  | **Required** |

### `ddToDMS(dd: number, direction: "latitude" | "longitude"): string`

Converts decimal degrees to decimal minutes

| Param     | Type                        | Description                | Default      |
| --------- | --------------------------- | -------------------------- | ------------ |
| degrees   | `number`                    | decimal degrees to convert | **Required** |
| direction | `"latitude" or "longitude"` | direction of the degrees   | **Required** |

### `getCenterOfCoordinates(coordinates: Coordinates[]): Coordinates`

Get the latitude and longitude center of an array of coordiantes.

| Param       | Type                                         | Description          | Default      |
| ----------- | -------------------------------------------- | -------------------- | ------------ |
| coordinates | [`Coordinates[]`](/src/types/coordinates.ts) | array of coordinates | **Required** |

### `getRhumbLine({ from, to }): number`

Returns the rhumb line between 2 longitudes.

| Param | Type     | Description        | Default      |
| ----- | -------- | ------------------ | ------------ |
| from  | `number` | starting longitude | **Required** |
| to    | `number` | ending longitude   | **Required** |

### `getWindroseDirections(compassPoints: CompassPoints): Windrose[]`

Returns an array of windrose directions for a given number of compass points.

| Param         | Type                                     | Description                     | Default      |
| ------------- | ---------------------------------------- | ------------------------------- | ------------ |
| compassPoints | [`CompassPoints`](/src/types/compass.ts) | number of compass points to use | **Required** |

### `haversine({ from, to, useRhumbLine }): number`

Returns the great-circle distance in kilometers between 2 sets of coordinates using the [haversine formula](https://en.wikipedia.org/wiki/Versine#hav).

| Param        | Type                                       | Description                                           | Default      |
| ------------ | ------------------------------------------ | ----------------------------------------------------- | ------------ |
| from         | [`Coordinates`](/src/types/coordinates.ts) | starting coordinates                                  | **Required** |
| to           | [`Coordinates`](/src/types/coordinates.ts) | ending coordinates                                    | **Required** |
| useRhumbLine | `boolean`                                  | whether or not to get the distance along a rhumb line | `false`      |

### `midpoint({ from, to, useRhumbLine }): Coordinates`

Returns the midpoint coordinate set between 2 coordinates.

| Param        | Type                                       | Description                                           | Default      |
| ------------ | ------------------------------------------ | ----------------------------------------------------- | ------------ |
| from         | [`Coordinates`](/src/types/coordinates.ts) | starting coordinates                                  | **Required** |
| to           | [`Coordinates`](/src/types/coordinates.ts) | ending coordinates                                    | **Required** |
| useRhumbLine | `boolean`                                  | whether or not to get the distance along a rhumb line | `false`      |

### `pointsInRange({ from, to, range }): boolean`

Returns whether or not 2 points are within a certain statue mile distance from each other.

| Param | Type                                       | Description                  | Default      |
| ----- | ------------------------------------------ | ---------------------------- | ------------ |
| from  | [`Coordinates`](/src/types/coordinates.ts) | starting coordinates         | **Required** |
| to    | [`Coordinates`](/src/types/coordinates.ts) | ending coordinates           | **Required** |
| range | `number`                                   | statute miles to fall within | `false`      |

### `vincenty({ from, to }): number`

Returns the geodetic distance in kilometers between 2 points using the [Vincenty inverse formula](https://en.wikipedia.org/wiki/Vincenty%27s_formulae).

| Param | Type                                       | Description          | Default      |
| ----- | ------------------------------------------ | -------------------- | ------------ |
| from  | [`Coordinates`](/src/types/coordinates.ts) | starting coordinates | **Required** |
| to    | [`Coordinates`](/src/types/coordinates.ts) | ending coordinates   | **Required** |
