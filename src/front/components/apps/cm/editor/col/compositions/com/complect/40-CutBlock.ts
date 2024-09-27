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
        const linePositions: (null | number)[] | und = ord.p?.[linei]?.toSorted(sortNums);

        if (linePositions == null) return;

        let prevLineSegmentVowelsLength = 0;

        if (linePositions[0] === -2) {
          linePositions.splice(0, 1);
          linePositions.push(-2);
        }

        line.split('$').forEach((segment, segmenti, segmenta) => {
          const lineSegmentVowels = this.getVowelPositions(segment);

          const lineSegmentPositions: number[] = [];
          positions.push(lineSegmentPositions);

          const lineSegmentChordLabels: string[] = [];
          chordLabels.push(lineSegmentChordLabels);

          for (let posi = 0; posi < linePositions.length; posi++) {
            const positionInLine = linePositions[posi];

            if (positionInLine === null) continue;

            if (positionInLine < 0) {
              pushChord(lineSegmentChordLabels);

              if (positionInLine === -1) {
                if (lineSegmentPositions.length === 0) lineSegmentPositions.push(positionInLine);
              } else if (positionInLine === -2) {
                if (segment.endsWith(' ') || segmenti === segmenta.length - 1)
                  lineSegmentPositions.push(positionInLine);
              }

              linePositions[posi] = null;

              continue;
            }

            if (positionInLine >= lineSegmentVowels.length + prevLineSegmentVowelsLength) break;

            lineSegmentPositions.push(positionInLine - prevLineSegmentVowelsLength - (segment.startsWith(' ') ? 1 : 0));
            linePositions[posi] = null;

            pushChord(lineSegmentChordLabels);
          }

          const lasti = lineSegmentVowels[lineSegmentPositions[lineSegmentPositions.length - 1]];
          if (segment[lasti] === ' ' && segment.length - 1 === lasti)
            lineSegmentPositions[lineSegmentPositions.length - 1] = -2;

          prevLineSegmentVowelsLength += lineSegmentVowels.length;
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
