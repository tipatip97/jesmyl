import smylib, { SMyLib } from '../../shared/SMyLib';
import { makeRegExp } from '../makeRegExp';

const objMarker = '*';

const stringEncodeValue = (value: any) =>
  JSON.stringify(value).replace(/\*/g, '%2a').replace(/ /g, '*').replace(/"/g, '%22');
const stringDecodeValue = (value: string) =>
  JSON.parse(value.replace(/\*/g, ' ').replace(/%2a/g, '*').replace(/%22/g, '"'));

export default class LinkCoder<
  Args extends Record<string, string | any>,
  ValueKey = keyof Args,
  Zips = Record<keyof Args, string>,
> {
  private zips: Zips;
  private hostName: string;
  private valueKey: ValueKey;

  constructor(hostName: string, valueKey: ValueKey, zips: Zips) {
    SMyLib.entries(zips).forEach(([name, value]) => {
      if (name === valueKey) return;
      if (!smylib.isStr(value)) throw Error(`Значение "${name as never} (${value})" должно быть строкой!`);
      if (value.startsWith(objMarker))
        throw Error(`Значение "${name as never} (${value})" не должно начинаться на знак ${objMarker}!`);
    });

    this.zips = zips;
    this.hostName = hostName;
    this.valueKey = valueKey;
  }

  encode(args: Args) {
    return LinkCoder.encode<Args, ValueKey, Zips>(this.hostName, this.valueKey, this.zips, args);
  }

  decode(link: string) {
    return LinkCoder.decode<Args, ValueKey, Zips>(this.hostName, link, this.valueKey, this.zips as Zips);
  }

  static encode<Args extends Record<string, string>, ValueKey = keyof Args, Zips = Record<keyof Args, string>>(
    hostName: string,
    valueKey: ValueKey,
    zips: Zips,
    args: Args,
  ) {
    const url = new URL(hostName);

    SMyLib.entries(args).forEach(([key, val]) => {
      if (key === valueKey) return;
      url.searchParams.set(zips[key as keyof Zips] as string, val);
    });
    const value = args[valueKey as string];

    if (smylib.isObj(value)) {
      SMyLib.entries(value).forEach(([key, val]) => {
        if (val !== undefined) url.searchParams.set(`${objMarker}${key as string}`, stringEncodeValue(val));
      });
    } else url.searchParams.set(zips[valueKey as keyof Zips] as string, stringEncodeValue(value));

    return url
      .toString()
      .replace(/%5B/gi, '[')
      .replace(/%5D/gi, ']')
      .replace(/%3A/gi, ':')
      .replace(/%2C/gi, ',')
      .replace(/%22/gi, '"');
  }

  static decode<Args extends Record<string, string>, ValueKey = keyof Args, Zips = Record<keyof Args, string>>(
    hostName: string,
    link: string,
    valueKey: ValueKey,
    zips: Zips,
  ) {
    try {
      if (!link.startsWith(hostName)) return null;
      const antiZips = SMyLib.entries(zips as Record<string, string>).reduce(
        (zips, [key, val]) => {
          zips[val] = key;
          return zips;
        },
        {} as Record<string, string>,
      );
      const result: Args = {} as Args;
      let valueDict: Record<string, unknown> | und;

      new URL(link).searchParams.forEach((value, zippedKey) => {
        const attrKey = antiZips[zippedKey];

        if (valueKey === attrKey) {
          result[attrKey as keyof Args] = stringDecodeValue(value);
          return;
        }
        if (attrKey) {
          result[attrKey as keyof Args] = value as never;
          return;
        }
        if (zippedKey.startsWith(objMarker)) {
          if (valueDict === undefined) {
            result[valueKey as keyof Args] = valueDict = {} as never;
          }
          valueDict[zippedKey.replace(makeRegExp(`/\\${objMarker}/`), '')] = stringDecodeValue(value);
        }
      });

      return result;
    } catch (e) {
      return null;
    }
  }
}
