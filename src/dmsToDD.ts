import { round } from "./math";
import { DMS } from "./types/degrees";

/**
 * dmsToDD - convert degrees minutes seconds into decimal degrees
 *
 * @param dms - the dms string to convert
 */
export function dmsToDD(dms: DMS): number {
  const dmsReg: RegExp =
    /^(-?\d+(?:\.\d+)?)[°:d]?\s?(?:(\d+(?:\.\d+)?)['′ʹ:]?\s?(?:(\d+(?:\.\d+)?)["″ʺ]?)?)?\s?([NSEW])?/i;

  const match: RegExpExecArray | null = dmsReg.exec(dms);

  if (!match) return NaN;

  const [_, degs, mins, secs, hemisphere] = match;

  const degrees: number = Number(degs);
  const minutes: number = typeof mins !== "undefined" ? Number(mins) / 60 : 0;
  const seconds: number = typeof secs !== "undefined" ? Number(secs) / 3600 : 0;

  if (hemisphere !== undefined && /[SW]/i.test(hemisphere)) {
    const val = -Math.abs(degrees) - minutes - seconds;

    return round(val, 5);
  }

  return round(degrees + minutes + seconds, 5);
}
