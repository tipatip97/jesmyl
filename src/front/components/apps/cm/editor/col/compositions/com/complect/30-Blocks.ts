import { makeRegExp } from '../../../../../../../../../back/complect/makeRegExp';
import mylib from '../../../../../../../../complect/my-lib/MyLib';
import { EditableComOrders } from './20-Orders';

const itTrim = (it: string) => it.trim();

export class EditableComBlocks extends EditableComOrders {
  changeBlock(coln: 'texts' | 'chords', coli: number, val: string, isInsert = false) {
    const value = coln === 'texts' ? val : this.transBlock(val, 12 - (this.transPosition || 0));
    if (value == null) return;
    const execValue = value.split('\n').map(itTrim).join('\n');
    const corrects = this.setBlockCorrects(coln, coli, val);
    const colnLiteral = coln === 'texts' ? 't' : 'c';

    this.exec({
      uniq: [coln, coli],
      prev: (coln === 'texts' ? this.texts : this.chords)?.[coli]?.replace(makeRegExp('/^\\s+|\\s+$/gm'), ''),
      value: execValue,
      method: 'set',
      action: 'changeBlocks',
      corrects,
      args: {
        value: execValue,
        coln: colnLiteral,
        index: coli,
      },
      data: {
        isInsert,
      },
    });

    if (coln === 'texts' && this.texts) this.texts[coli] = value;
    else if (this.chords) {
      this.chords[coli] = value;
      this.resetChordLabels();
    }
  }

  add(fieldn: 'texts' | 'chords', value: string | string[], isInsert = false) {
    const emptyIndex = (mylib.findLastIndex(fieldn === 'texts' ? this.texts : this.chords, ch => ch) || 0) - -1;

    [value].flat().forEach((block, blocki) => {
      this.changeBlock(fieldn, emptyIndex + blocki, block, isInsert);
    });

    if (fieldn === 'chords') this.resetChordLabels();

    return this;
  }

  removeBlock(coln: 'texts' | 'chords', coli: number) {
    if (coln === 'texts') {
      const { indexes } = this.getOrdersOnBlockDeletion(coln, coli);

      indexes?.forEach(({ ord }) => {
        this.removeOrderBlock(ord);
      });
    }

    this.updateOrderSticks(coln, coli, -1, coln === 'chords');
    const colnLiteral = coln === 'texts' ? 't' : 'c';
    const currLen = this[coln]?.length;

    this.exec({
      action: 'removeBlock',
      method: 'remove',
      uniq: `${coln}-${coli}`,
      args: {
        value: coli,
        coln: colnLiteral,
      },
      anti: exec => {
        const { action, args, data } = exec;
        if (action === 'changeBlocks' && args && args.coln === colnLiteral && args.comw === this.wid) {
          if (args.index === coli)
            return data?.isInsert
              ? strategy => strategy.RemoveNew
              : args.value === ''
                ? strategy => strategy.RememberNew
                : null;
          else if (currLen !== undefined && args.index === currLen - 1) return strategy => strategy.RememberNew;
        }
      },
    });
    this[coln]?.splice(coli, 1);

    if (coln === 'chords') this.resetChordLabels();
  }

  insertBlocks(coln: 'texts' | 'chords', coli: number, value = '', prev = '...') {
    if (coli === (this[coln]?.length || 0) - 1) {
      this.add(coln, '', true);
    } else {
      this[coln]?.concat(value).forEach((_, ccoli, ccola) => {
        if (ccoli <= coli) return;
        const val = ccoli - 1 === coli ? value : ccoli === coli ? prev : '' + ccola[ccoli - 1];

        this.changeBlock(coln, ccoli, val, true);
      });

      this.updateOrderSticks(coln, coli, 1);
    }

    if (coln === 'chords') this.resetChordLabels();
  }
}
