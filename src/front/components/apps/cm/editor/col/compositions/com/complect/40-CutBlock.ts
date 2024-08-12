import { makeRegExp } from '../../../../../../../../../back/complect/makeRegExp';
import { Order } from '../../../../../col/com/order/Order';
import Correct from '../../../../corrects-box/Correct';
import { CorrectsBox } from '../../../../corrects-box/CorrectsBox';
import { EditableOrder } from '../../complect/orders/EditableOrder';
import { EditableComParseBlocks } from './31-ParseBlocks';

const sortNums = (a: number, b: number) => a - b;
const mapJoinBySpace = (it: string[]) => it.join(' ');

export class EditableComCutBlock extends EditableComParseBlocks {
  ordersOnChange: EditableOrder[] = [];

  cutBlock(coli: number, ords: EditableOrder[]) {
    const firstText = ords[0].top.text;
    if (!firstText) return;

    this.changeBlock('texts', coli, firstText);
    const changedChordsiSet = new Set<number>();

    ords.forEach(ord => {
      ord.exec({
        uniq: ord.wid,
        prev: ord.top.p,
        value: ord.top.positions,
        method: 'set',
        action: 'comSetOrderChordPositionBlock',
        args: {
          value: ord.top.positions,
          ordw: ord.wid,
        },
      });

      const source = ord.com._ords?.find(({ w }) => w === ord.wid);
      if (source) source.p = ord.top.positions;

      if (ord.chordsi == null || changedChordsiSet.has(ord.chordsi) || !ord.top.chordLabels) return;
      changedChordsiSet.add(ord.chordsi);

      const chords = ord.top.chordLabels.map(mapJoinBySpace).join('\n').replace(makeRegExp('/B/g'), 'A#');

      this.changeBlock('chords', ord.chordsi, chords);
    });

    this.afterOrderChange();
  }

  fixCorrectError(code: number, texti: number, message: string): string {
    const corrects = (this.corrects[`texts-block-${texti}`] ??= new CorrectsBox([]));

    const index = corrects.errors?.findIndex(cor => cor.code === code);

    if (index === undefined || index < 0) {
      corrects.errors = corrects.errors?.concat(new Correct({ message, code })) ?? [];
    }

    return message;
  }

  prepareCutBlock(texti: number) {
    const ords = this.ords.filter(ord => ord.t === texti && ord.c !== undefined);
    if (ords.length === 0) return;

    const comTexts = this.texts;
    const cleanText = comTexts?.[texti];

    if (!cleanText || this.chords == null) return;

    const dollarsCount = cleanText.match(makeRegExp('/\\$/g'))?.length;

    if (!dollarsCount) return;

    const comChords = this.chords;
    const newOrds: EditableOrder[] = [];
    const newText = cleanText.replace(makeRegExp('/\\s*\\$+\\s*/g'), '\n');
    let disabledReason = '';

    if (dollarsCount)
      ords.forEach(ord => {
        this.ords.forEach(comOrd => {
          if (comOrd.t == null || comOrd.c == null || ord.c !== comOrd.c || comTexts[comOrd.t] === cleanText) return;

          const ordTextDollarsCount = comTexts[comOrd.t].match(makeRegExp('/\\$/g'))?.length;

          if (
            ordTextDollarsCount !== dollarsCount &&
            comTexts[comOrd.t].split('\n').length === cleanText.split('\n').length
          ) {
            disabledReason = this.fixCorrectError(
              982346544100137,
              comOrd.t,
              `Не совпадает количество символов $ для разбивки текстов`,
            );
          }
        });
      });

    ords.forEach(ord => {
      if (ord.c == null || ord.t == null) return;

      const repeatedText = Order.makeRepeatedText(cleanText, ord.repeats);

      const positions: number[][] = [];
      const chordLabels: string[][] = [];

      const chordsLine = this.transBlock(comChords[ord.c]).trim().split(makeRegExp('/\\s+/'));

      const pushChord = (partChordLabels: string[]) => {
        partChordLabels.push(chordsLine[0]);
        chordsLine.shift();
      };

      repeatedText.split('\n').forEach((line, linei) => {
        const linePoss: (null | number)[] | und = ord.p?.[linei]?.toSorted(sortNums);

        if (linePoss == null) return;

        let prevLen = 0;

        if (linePoss[0] === -2) {
          console.log([...linePoss], linePoss);
          linePoss.splice(0, 1);
          linePoss.push(-2);
          console.log(linePoss);
        }

        line.split('$').forEach(part => {
          let linePos: null | number = null;
          const partVowels = this.getVowelPositions(part);

          const partPositions: number[] = [];
          positions.push(partPositions);

          const partChordLabels: string[] = [];
          chordLabels.push(partChordLabels);

          for (let posi = 0; posi < linePoss.length; posi++) {
            linePos = linePoss[posi];

            if (linePos === null) continue;
            if (linePos < 0) {
              pushChord(partChordLabels);

              if (linePos === -1) {
                if (partPositions.length === 0) partPositions.push(linePos);
              } else if (linePos === -2) {
                if (partPositions.length !== 0) partPositions.push(linePos);
              }

              linePoss[posi] = null;

              continue;
            }

            if (linePos >= partVowels.length + prevLen) break;

            partPositions.push(linePos - prevLen - (part.startsWith(' ') ? 1 : 0));
            linePoss[posi] = null;

            pushChord(partChordLabels);
          }

          const lasti = partVowels[partPositions[partPositions.length - 1]];
          if (part[lasti] === ' ' && part.length - 1 === lasti) partPositions[partPositions.length - 1] = -2;

          prevLen += partVowels.length;
        });
      });

      if (chordsLine.length) disabledReason = 'Потеряна часть аккордов при разъединении строк';

      const newOrd = new EditableOrder(
        {
          ...ord,
          positions,
          text: newText,
          v: 1,
          chordLabels,
        },
        this as never,
      );

      newOrds.push(newOrd);

      const prevOrdi = this.ordersOnChange.findIndex(ord => ord.wid === newOrd.wid);
      this.ordersOnChange.push(newOrd);

      if (prevOrdi < 0) return;
      this.ordersOnChange.splice(prevOrdi, 1);
    });

    this.ordersOnChange.forEach((topOrd, topOrdi) => {
      const isError = this.ordersOnChange.some((ord, ordi) => {
        if (topOrdi === ordi) return false;
        const topPoss = topOrd.positions;

        return topPoss && ord.positions?.some((poss, possi) => poss !== null && poss.length !== topPoss[possi]?.length);
      });

      if (isError && topOrd.texti) {
        disabledReason = this.fixCorrectError(
          923874623612366,
          topOrd.texti,
          `Неверное количество аккордов для аппликатуры (символы $ неравномерно разделяют строки - в блоках разное количество аккордов на аналогичных строчках)`,
        );
      }
    });

    return {
      ords: newOrds,
      disabled: !!disabledReason,
      disabledReason: disabledReason.trim(),
    };
  }
}
