import { makeRegExp } from '../../../../../../../../../back/complect/makeRegExp';
import mylib from '../../../../../../../../complect/my-lib/MyLib';
import { CorrectsBox } from '../../../../corrects-box/CorrectsBox';
import { correctNotSlavicNameReg_i, textedChordReg } from '../../../../Editor.complect';
import { EditableComBase } from './0-Base';

export class EditableComCorrects extends EditableComBase {
  corrects: Record<string, CorrectsBox | nil> = {};

  prepareCorrectTextLine(line: string) {
    return line
      .replace(makeRegExp('/(\\s*)[«„]\\s*/g'), (_: string, pre: string) => `${pre ? ' ' : ''}"`)
      .replace(makeRegExp('/\\s*[»“](\\s*)/g'), (_: string, post: string) => `"${post ? ' ' : ''}`)
      .replace(
        makeRegExp('/(\\s*)[—–](\\s*)/g'),
        (_: string, pre: string, post: string) => `${pre && post ? ' ' : ''}-${pre && post ? ' ' : ''}`,
      )
      .replace(makeRegExp('/\\s*([,.;!?:])\\s*([^"])/g'), '$1 $2');
  }

  correctRename(name: string) {
    return mylib.isStr(name) ? this.rename(this.takeCorrectName(name)) : name;
  }

  correctName(name: string) {
    return name.replace(correctNotSlavicNameReg_i, '');
  }

  takeCorrectName(text: string) {
    let name = '';

    text.split(makeRegExp('/\\n\\s*\\n/')).find(block => {
      return block.split('\n').find(line => {
        const lowerLine = line.toLowerCase().replace(makeRegExp('/^[^а-яё]+/g'), '');
        if (this.takeStyleByTitle(lowerLine)) return false;

        if (makeRegExp('/^[^a-zA-Z\\d#]+$/').exec(lowerLine)) {
          name = line;
          return true;
        }
        return false;
      });
    });

    return name.replace(makeRegExp('/[^а-я!]+$/i'), '');
  }

  setBlockCorrects(coln: 'texts' | 'chords', coli: number, val: string, isSetAllText?: boolean) {
    const corrects = this.blockCorrects(val, coln, coli, undefined, isSetAllText);
    this.corrects[`${coln}-block-${coli}`] = corrects;
    return corrects;
  }

  blockCorrects(
    value: string | und,
    coln: 'chords' | 'texts',
    blocki?: number,
    action?: string,
    isSetAllText?: boolean,
  ) {
    const blockNum = blocki == null ? '' : `. (${blocki - -1}-й блок)`;
    const ret = (err: string | null) => new CorrectsBox(err ? [{ message: err, code: 0 }] : null);

    if (coln === 'chords') {
      const errors: string[] = [];
      const text = (value || '')
        .trim()
        .split(makeRegExp('/([\\n\\s ]+)/'))
        .map((chord, chordi) => {
          if (!(chordi % 2) && !chord.match(textedChordReg)) {
            errors.push(chord);
            return `[${chord}]`;
          }
          return chord;
        })
        .join(' ');
      const few = errors.length > 1;

      return ret(
        errors.length
          ? `Аккорд${few ? 'ы' : ''} "${errors.join('; ')}" не верно написан${
              few ? 'ы' : ''
            }${blockNum}:\n\n${text}\n\n`
          : null,
      );
    } else {
      let isThereErrors;
      let mistakes = '';
      const text = (value || '').replace(makeRegExp('/[^-ієїа-яё().,":;!?\\s\']+/gi'), all => {
        isThereErrors = true;
        mistakes += all;
        return `[${all}]`;
      });
      if (isThereErrors) return ret(`Присутствуют недопустимые символы${blockNum}: ${mistakes}\n\n${text}\n\n`);

      const { level } = this.bracketsTransformed(value);
      if (level) {
        const pre = level < 0 ? 'открывающ' : 'закрывающ';
        const text = mylib.declension(
          Math.abs(level),
          `${pre}уюся кавычку`,
          `${pre}ихся кавычки`,
          `${pre}ихся кавычек`,
        );
        return ret(
          `В тексте присутствует непарное количество ковычек.\nНеобходимо добавить ${Math.abs(
            level,
          )} ${text}${blockNum}\n\n`,
        );
      }
      return this.col.textCorrects(value, action, isSetAllText);
    }
  }
}
