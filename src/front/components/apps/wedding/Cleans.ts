import { WedGuest } from '../../../../back/apps/wed/model';
import { makeRegExp } from '../../../../back/complect/makeRegExp';
import smylib from '../../../../back/shared/SMyLib';

const miLine = 'afirjesmyl';

const trans: Record<string, string> = {
  а: 'a',
  б: 'b',
  в: 'v',
  г: 'g',
  д: 'd',
  е: 'e',
  ё: 'yo',
  ж: 'zh',
  з: 'z',
  и: 'i',
  й: 'j',
  к: 'k',
  л: 'l',
  м: 'm',
  н: 'n',
  о: 'o',
  п: 'p',
  р: 'r',
  с: 's',
  т: 't',
  у: 'u',
  ф: 'f',
  х: 'h',
  ц: 'ts',
  ч: 'ch',
  ш: 'sh',
  щ: 'sch',
  ъ: "'",
  ы: 'i',
  ь: "'",
  э: 'e',
  ю: 'yu',
  я: 'ya',
};

export class WedCleans {
  static takeMi = (guestStr: string) => {
    const miStr = guestStr.split(':')[0];
    const mi = miStr == null ? undefined : this.textInMi(miStr);

    return smylib.isNum(mi) ? mi : undefined;
  };

  static makeGuestFullName = (guest: WedGuest) =>
    `${guest.ln || ''} ${guest.fn || ''}${guest.wn ? ` и ${guest.wn}` : ''}`.trim();

  static miInText = (mi: number | und) =>
    (mi == null ? '' : `${(mi + 111) * 138}`).replace(makeRegExp('/\\d/g'), all => miLine[all as never]);

  static textInMi = (miStr: string) =>
    +miStr.replace(makeRegExp(`/[${miLine}]/g`), all => '' + miLine.indexOf(all)) / 138 - 111;

  static secret = (guest: WedGuest) => {
    if (guest.mi == null || !guest.fn) return '';

    return (
      `${this.miInText(guest.mi)}:` +
      this.makeGuestFullName(guest)
        .replace(/ +/g, '-')
        .replace(/[а-яё]/gi, all => {
          const letter = trans[all.toLowerCase()];

          return all === all.toLowerCase() ? letter : letter.toUpperCase();
        })
    );
  };
}
