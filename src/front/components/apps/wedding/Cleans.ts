import { makeRegExp, smylib } from 'shared/utils';
import { WedGuest } from '../../../../shared/api/complect/apps/wed/complect/model';

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

  static makePropositionUrl = (person: WedGuest, weddn: string) =>
    `${window.location.origin}/wedding/${weddn}/${this.secret(person)}`;

  static makeGuestFullName = (guest: WedGuest) => `${guest.ln || ''} ${this.makeGuestName(guest)}`.trim();
  static makeGuestName = (guest: WedGuest) => `${guest.fn || ''}${guest.wn ? ` и ${guest.wn}` : ''}`;

  static makePropositionMessage = (guest: WedGuest, weddn: string) => {
    const nl = '\n';
    const hello = ['Привет', 'Приветствую'][guest.c];
    const you = ['тебя', 'вас'][guest.c];
    const wYou = ['тобой', 'вами'][guest.c];
    const conf = ['подтверди', 'подтвердите'][guest.c];

    return (
      `${hello}! ${WedCleans.makeGuestName(guest)},` +
      ` приглашаем ${you} на нашу свадьбу, будем рады разделить это событие вместе с ${wYou}! 🤍${nl}` +
      `Пожалуйста, ${conf} свое участие до 26 сентября.` +
      `${nl}  Подробная информация на сайте${nl}` +
      `  👇👇👇${nl}` +
      `${WedCleans.makePropositionUrl(guest, weddn)}${nl}${nl}Ждем встречи!`
    );
  };

  static miInText = (mi: number | und) =>
    (mi == null ? '' : `${(mi + 111) * 138}`).replace(makeRegExp('/\\d/g'), all => miLine[all as never]);

  static textInMi = (miStr: string) =>
    +miStr.replace(makeRegExp(`/[${miLine}]/g`), all => '' + miLine.indexOf(all)) / 138 - 111;

  static secret = (guest: WedGuest) => {
    if (guest.mi == null || !guest.fn) return '';

    return (
      `${this.miInText(guest.mi)}:` +
      this.makeGuestFullName(guest)
        .replace(makeRegExp('/ +/g'), '-')
        .replace(makeRegExp('/[а-яё]/gi'), all => {
          const letter = trans[all.toLowerCase()];

          return all === all.toLowerCase() ? letter : letter.toUpperCase();
        })
    );
  };
}
