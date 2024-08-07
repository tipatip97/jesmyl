import { makeRegExp } from '../../../../../../../../../back/complect/makeRegExp';
import { CorrectsBox } from '../../../../corrects-box/CorrectsBox';
import { EditableOrder } from '../../complect/orders/EditableOrder';
import { EditableComParseBlocks } from './31-ParseBlocks';

const sortNums = (a: number, b: number) => a - b;
const mapSplitBySpace = (it: string) => it.split(' ');
const mapJoinBySpace = (it: string[]) => it.join(' ');
const mapClone = <It>(it: It[]) => it.map(it => it);

export class EditableComCutBlock extends EditableComParseBlocks {
  cutBlock(coli: number, ords: EditableOrder[]) {
    const text = ords[0].top.text;
    if (!text) return;

    this.changeBlock('texts', coli, text);
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

    delete this.corrects[`texts-block-${coli}`];

    this.afterOrderChange();
  }

  prepareCutBlock(texti: number): { ords: EditableOrder[]; disabled: boolean; disabledReason: string } | und {
    const comTexts = this.texts;
    const text = comTexts?.[texti];

    if (!text || this.chords == null) return;

    const dollarsCount = text.match(makeRegExp('/\\$/g'))?.length;

    if (!dollarsCount) return;

    const ords = this.ords.filter(ord => ord.t === texti && ord.c !== undefined);
    const comChords = this.chords;
    const newOrds: EditableOrder[] = [];
    const newText = text.replace(makeRegExp('/\\s*\\$+\\s*/g'), '\n');
    let disabled = false;
    let disabledReason = '';

    if (ords.length === 0) {
      this.changeBlock('texts', texti, newText);
      return;
    }

    if (dollarsCount)
      ords.forEach(ord => {
        this.ords.forEach(comOrd => {
          if (comOrd.t == null || comOrd.c == null || ord.c !== comOrd.c || comTexts[comOrd.t] === text) return;

          const ordTextDollarsCount = comTexts[comOrd.t].match(makeRegExp('/\\$/g'))?.length;

          if (
            ordTextDollarsCount !== dollarsCount &&
            comTexts[comOrd.t].split('\n').length === text.split('\n').length
          ) {
            const message = `Не совпадает количество символов $ для разбивки текстов (${dollarsCount})`;

            this.corrects[`texts-block-${comOrd.t}`] = new CorrectsBox([{ message }]);

            disabled = true;
            disabledReason += `\n${message}`;
          }
        });
      });

    const lines = text.split('\n');

    ords.forEach(ord => {
      if (ord.c == null) return;

      const positions: number[][] = [];
      const chordLabels: string[][] = [];

      const chords: string[][] = this.transBlock(comChords[ord.c], this.transPosition).split('\n').map(mapSplitBySpace);
      const initialChords = chords.map(mapClone);

      lines.forEach((line, linei) => {
        const linePoss: (null | number)[] | und = ord.p?.[linei]?.toSorted(sortNums);

        if (linePoss == null) return;

        let prevLen = 0;
        const lineChords = chords[linei] ?? [];

        if (linePoss[0] === -2) {
          linePoss.splice(0, 1);
          linePoss.push(-2);
        }

        line.split('$').forEach(part => {
          let linePos: null | number = null;
          const partVowels = this.getVowelPositions(part);

          const partPositions: number[] = [];
          positions.push(partPositions);

          const partChordLabels: string[] = [];
          chordLabels.push(partChordLabels);

          const pushChord = () => {
            if (lineChords[0]) {
              partChordLabels.push(lineChords[0]);
              lineChords.shift();
            }
          };

          for (let posi = 0; posi < linePoss.length; posi++) {
            linePos = linePoss[posi];

            if (linePos === null) continue;
            if (linePos < 0) {
              pushChord();

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

            pushChord();
          }

          const lasti = partVowels[partPositions[partPositions.length - 1]];
          if (part[lasti] === ' ' && part.length - 1 === lasti) partPositions[partPositions.length - 1] = -2;

          prevLen += partVowels.length;
        });
      });

      newOrds.push(
        new EditableOrder(
          {
            ...ord,
            positions,
            text: newText,
            v: 1,
            chordLabels: !initialChords.some((line, linei) => line.length !== positions[linei]?.length)
              ? initialChords
              : chordLabels,
          },
          this as never,
        ),
      );
    });

    return { ords: newOrds, disabled, disabledReason: disabledReason.trim() };
  }
}
